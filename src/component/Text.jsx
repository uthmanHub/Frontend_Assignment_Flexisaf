import React, { useEffect, useRef } from "react";

const reviewsData = [
  { id: 1, username: "FashionLover23", rating: 5, comment: "Absolutely loved the trendy dress I got! The quality is top-notch, and it fits perfectly. I’ll definitely shop here again." },
  { id: 2, username: "BlogFanatic", rating: 4, comment: "The blog content here is insightful and well-written. I especially enjoyed the article on sustainable fashion!" },
  { id: 3, username: "StyleQueen99", rating: 5, comment: "The jewelry section is amazing! I bought a necklace, and it’s even more gorgeous in real life. Highly recommend." },
  { id: 4, username: "TrendHunter", rating: 3, comment: "I love the blog content, but the clothing section could use more options in larger sizes." },
  { id: 5, username: "EcoChic", rating: 4, comment: "Great products and fast delivery! The eco-friendly packaging is a big plus for me." },
  { id: 6, username: "ShopaholicMom", rating: 5, comment: "I bought a few outfits for myself and my daughter. The quality exceeded my expectations!" },
  { id: 7, username: "BlogReader101", rating: 4, comment: "The news section keeps me up-to-date with fashion trends, but I’d like to see more content on beauty tips." },
];

function Texty() {
  const carouselRef = useRef(null);

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        // Scroll one card's width (the container width)
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth, // Scroll one card at a time
          behavior: "smooth",
        });

        // Reset scroll if at the end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 8000); // Adjust the interval timing (3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Customer Reviews</h1>
        <div
          ref={carouselRef}
          className="flex overflow-hidden relative w-full"
        >
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-full bg-white p-4 rounded-lg shadow-md"
              style={{ minWidth: "100%" }} // Ensure each card takes the full width of the container
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg">{review.username}</h2>
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} className="text-gray-300">&#9733;</span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Texty;


// uninstall tailwind-scrollbar-hide