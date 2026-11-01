import Link from "next/link";
import { ArrowLeft, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#171C24] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="font-heading font-extrabold text-7xl text-[#F5A623]">
          404
        </div>
        <h1 className="font-heading font-bold text-3xl uppercase text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-300">
          The industrial page or equipment reference you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5A623] text-[#171C24] text-xs font-bold uppercase tracking-wider rounded"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <a
            href="tel:+919220893841"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1F2631] text-white border border-[#293545] text-xs font-semibold uppercase tracking-wider rounded"
          >
            <Phone className="w-4 h-4 text-[#F5A623]" />
            <span>Call Team</span>
          </a>
        </div>
      </div>
    </div>
  );
}
