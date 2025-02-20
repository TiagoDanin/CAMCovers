import Image from "next/image"
import Link from "next/link"
import { ReviewCarousel } from "@/components/review-carousel"
import reviews from "@/data/reviews.json"

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Transform your photos into <span className="text-[#6750A4]">Professional Album Covers</span>
          </h1>
          <p className="text-gray-600 max-w-lg">
            CAM Covers is a fun and creative photo editing app that turns your pictures into professional-looking music
            album covers inspired by real music players! Whether you want a grunge rock album, a dreamy lo-fi aesthetic,
            or a vibrant pop single, this app helps you create the perfect look.
          </p>
          <Link href="https://play.google.com/store/apps/details?id=com.tiagodanin.camcovers.cam_covers">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="h-14 w-auto mt-2"
            />
          </Link>
          <ReviewCarousel reviews={reviews} />
        </div>
        <div className="relative">
          <Image
            src="/screenshot/5.png"
            alt="CAM Covers App Interface"
            width={300}
            height={600}
            className="mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

