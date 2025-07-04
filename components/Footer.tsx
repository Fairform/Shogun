import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Fairform</h3>
            <p className="text-gray-600 mb-4">
              Instant, audit-ready compliance policy packs tailored to Australian small businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Compliance Guides</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Industry Updates</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              &copy; {currentYear} Fairform. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Twitter</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}