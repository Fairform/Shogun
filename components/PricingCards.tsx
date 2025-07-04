import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export default function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  ctaText 
}: PricingCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
      isPopular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="bg-blue-500 text-white text-center py-2">
          <p className="font-semibold">MOST POPULAR</p>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="text-green-500 mr-2" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}
