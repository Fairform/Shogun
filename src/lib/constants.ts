import React from 'react';
import { FaHeartbeat, FaChild, FaHardHat } from 'react-icons/fa';

export const industries = [
  { id: 'ndis', name: 'NDIS' },
  { id: 'childcare', name: 'Childcare' },
  { id: 'construction', name: 'Construction' },
  { id: 'hospitality', name: 'Hospitality' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'retail', name: 'Retail' },
  { id: 'education', name: 'Education' },
  { id: 'beauty', name: 'Beauty/Personal Care' },
];

export const benefits = [
  {
    icon: <FaHeartbeat size={32} color="#1779ba" />,
    title: 'NDIS Providers',
    description: 'Comprehensive policies meeting NDIS Quality and Safeguards Commission requirements.'
  },
  {
    icon: <FaChild size={32} color="#1779ba" />,
    title: 'Childcare Centers',
    description: 'Policies aligned with National Quality Framework and state regulations.'
  },
  {
    icon: <FaHardHat size={32} color="#1779ba" />,
    title: 'Construction',
    description: 'WHS policies compliant with Safe Work Australia standards.'
  }
];

export const pricingPlans = [
  {
    title: 'Lite',
    price: '$199',
    period: 'one-time',
    features: [
      '1 Industry Pack',
      'DOCX + PDF Formats',
      'Branded Documents',
      'No Automatic Updates',
      'No Multi-Industry Access'
    ],
    ctaText: 'Get Started'
  },
  {
    title: 'Pro',
    price: '$119',
    period: 'month',
    features: [
      'Unlimited Regenerations',
      'Up to 3 Industries',
      'Automatic Updates',
      'Compliance Alerts',
      'Priority Support'
    ],
    isPopular: true,
    ctaText: 'Get Started'
  },
  {
    title: 'Enterprise',
    price: '$149',
    period: 'month',
    features: [
      'Unlimited Industries',
      'White-label Branding',
      'API Access',
      'Team Management',
      'Dedicated Account Manager'
    ],
    ctaText: 'Contact Sales'
  }
];

export const testimonials = [
  {
    quote: 'Fairform saved us countless hours and thousands in legal fees. Our NDIS audit was seamless thanks to their comprehensive policy pack.',
    author: 'Sarah Johnson',
    role: 'NDIS Support Coordinator'
  },
  {
    quote: 'As a small childcare center, compliance was overwhelming. Fairform made it simple with industry-specific templates that just worked.',
    author: 'Michael Chen',
    role: 'Childcare Center Director'
  },
  {
    quote: 'We needed to update our WHS policies quickly for a new project. Fairform generated everything we needed in under an hour.',
    author: 'David Wilson',
    role: 'Construction Site Manager'
  }
];