'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { industries } from '@/lib/constants';

export default function IndustryForm() {
  const [industry, setIndustry] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (industry) {
      router.push(`/generate?industry=${industry}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-lg font-medium mb-3">Select your industry</label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger className="w-full h-14 text-base">
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => (
              <SelectItem key={ind.id} value={ind.id} className="text-base">
                {ind.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button 
        type="submit" 
        className="w-full h-14 text-base"
        disabled={!industry}
      >
        Continue
      </Button>
    </form>
  );
}