import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Music4, Palette, Type, Share2 } from "lucide-react"

const features = [
  {
    title: "Album Cover Generator",
    description: "Transform your photos into authentic music covers with album-style layouts and designs.",
    image: "/screenshot/1.png",
    icon: Music4,
  },
  {
    title: "Music Player Effects",
    description: "Choose from classic, modern, and creative player styles to enhance your edits.",
    image: "/screenshot/2.png",
    icon: Palette,
  },
  {
    title: "Custom Text",
    description: "Add titles, artist names, and decorative elements to personalize your cover.",
    image: "/screenshot/3.png",
    icon: Type,
  },
  {
    title: "Quick & Easy Sharing",
    description: "Instantly post your custom album covers on Instagram, Whatsapp, Facebook, TikTok, and more!",
    image: "/screenshot/4.png",
    icon: Share2,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Amazing Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create stunning album covers with CAM Covers, a fun and creative photo editing app that turns your pictures
            into professional-looking music album covers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden bg-white border-0">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <feature.icon className="w-5 h-5 text-[#6750A4]" />
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

