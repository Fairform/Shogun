import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const text = await request.text();
  const signature = request.headers.get('stripe-signature')!;
  
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      text,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: `Invalid signature` }, { status: 400 });
  }

  const supabase = createClient(cookies());
  
  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const documentId = session.metadata?.documentId;
    const userId = session.metadata?.userId;
    
    if (documentId) {
      await supabase
        .from('documents')
        .update({ is_watermarked: false })
        .eq('id', documentId);
    }
    
    if (userId) {
      await supabase
        .from('users')
        .update({ 
          stripe_customer_id: session.customer as string,
          subscription_plan: 'lite'
        })
        .eq('id', userId);
    }
  }

  return NextResponse.json({ received: true });
}