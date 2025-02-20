import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import reviews from "@/data/reviews.json"

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={`https://avatar.iran.liara.run/public/${review.gender === "male" ? "boy" : "girl"}/?username=${encodeURIComponent(review.name)}`}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">via {review.source}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="text-gray-600 mt-4">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

