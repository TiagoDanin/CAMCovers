import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-2">CAM Covers</h3>
              <p className="text-gray-600">Turn your photos into amazing album covers</p>
              <p className="text-sm text-gray-500 mt-2">Developed by Tiago Danin</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#features" className="hover:text-[#6750A4]">
              Features
            </Link>
            <Link href="#reviews" className="hover:text-[#6750A4]">
              Reviews
            </Link>
            <Link href="/privacy" className="hover:text-[#6750A4]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#6750A4]">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

