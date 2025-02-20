import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#6750A4]">CAM Covers</span>
          <span className="text-sm text-gray-500">by Tiago Danin</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#features" className="hover:text-[#6750A4]">
            Features
          </Link>
          <Link href="#reviews" className="hover:text-[#6750A4]">
            Reviews
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.tiagodanin.camcovers.cam_covers">
            <Image
              src="/CAMCovers/google-play-badge.png"
              alt="Get it on Google Play"
              width={120}
              height={35}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </nav>
    </header>
  )
}

