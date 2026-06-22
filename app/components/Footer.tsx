import { Droplets, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-6 w-6 text-blood-400" />
              <span className="text-lg font-bold">BloodLink</span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting donors with those in need. Every drop counts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/donors" className="hover:text-white">Find Donors</a></li>
              <li><a href="/request" className="hover:text-white">Request Blood</a></li>
              <li><a href="/centers" className="hover:text-white">Donation Centers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">info@bloodlink.org</p>
            <p className="text-gray-400 text-sm">+250 788 123 456</p>
            <p className="text-gray-400 text-sm">Kigali, Rwanda</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500 flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 text-blood-500" /> by BloodLink Team
        </div>
      </div>
    </footer>
  );
}