import Image from "next/image"
import Link from "next/link"

export function DownloadSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Unleash your creativity</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Download CAM Covers now and turn your memories into music-inspired masterpieces!
        </p>
        <Link href="https://play.google.com/store/apps/details?id=com.tiagodanin.camcovers.cam_covers">
          <Image
            src="/google-play-badge.png"
            alt="Get it on Google Play"
            width={200}
            height={60}
            className="h-14 w-auto mx-auto"
          />
        </Link>
      </div>
    </section>
  )
}

