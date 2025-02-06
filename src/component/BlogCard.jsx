import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ news }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='grid space-y-4 border-2 shadow-xl rounded-md bg-gray-300'>
      <div ref={imgRef} className=''>
        {/* {!isLoaded && (
          <div className="w-full h-72 bg-gray-200 animate-pulse rounded-lg"></div>
        )} */}
        {isVisible && (
          <img
            src={news.image}
            alt={news.title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-72 object-cover rounded-lg transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className='p-3 space-y-3'>
        <div className='space-y-1'>
          <h3 className='font-medium'>{news.description}</h3>
          <div className='flex items-center capitalize gap-2 text-sm'>
            <span>{news.source.name}</span>
            <span>&minus;</span>
            <span>{new Date(news.publishedAt).toDateString()}</span>
          </div>
        </div>

        <div className='flex justify-end'>
          <Link to={news.url} className='link button'>
            Read More
          <i className='fa fa-arrow-right ml-2'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
