'use client';
import { useState } from 'react';

export default function IndustrySelector() {
  const [industry, setIndustry] = useState('');

  return (
    <div className="space-y-4">
      <label htmlFor="industry" className="block text-sm font-semibold">Select Industry</label>
      <select
        id="industry"
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        className="border rounded p-2 w-full"
      >
        <option value="">Choose one</option>
        <option value="ndis">NDIS Provider</option>
        <option value="childcare">Childcare</option>
        <option value="construction">Construction</option>
        <option value="fitness">Fitness</option>
        <option value="cleaning">Cleaning</option>
      </select>
      {industry && (
        <p className="text-sm">You selected: {industry}</p>
      )}
    </div>
  );
}