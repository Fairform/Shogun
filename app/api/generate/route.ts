import { NextResponse } from 'next/server';
import { generatePolicyDocument } from '@/lib/generators';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { companyName, industry } = await request.json();
  
  try {
    // Generate documents
    const { docxBuffer, pdfBuffer } = await generatePolicyDocument(companyName);
    
    // Store in Supabase
    const zipName = `${companyName.replace(/\s+/g, '_')}_${industry}_policies.zip`;
    const { data, error } = await supabase.storage
      .from('documents')
      .upload(`${user.id}/${zipName}`, 
        Buffer.concat([docxBuffer, pdfBuffer]), // Simplified for MVP
        { contentType: 'application/zip' }
      );

    if (error) throw error;

    // Create document record
    const { data: document, error: dbError } = await supabase
      .from('documents')
      .insert({
        user_id: user.id,
        industry,
        company_name: companyName,
        zip_url: data.path,
        is_watermarked: true
      })
      .select()
      .single();

    return NextResponse.json(document);

  } catch (error) {
    return NextResponse.json(
      { error: 'Document generation failed' }, 
      { status: 500 }
    );
  }
}
