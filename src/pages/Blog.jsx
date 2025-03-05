import React, { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";

let sampleNews = [
  {
    content:
      "London CNN —\nBritain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.\nThe ... [3348 chars]",
    description:
      "Britain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/2025-01-28t100509z-585738588-rc2xicakkpqx-rtrmadp-3-britain-economy-heathrow-airport.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-01-29T12:18:00Z",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    title: "Heathrow Airport: UK backs third runway plans",
    url: "https://www.cnn.com/2025/01/29/uk/heathrow-airport-third-runway-expansion-gbr-intl/index.html",
  },

  {
    content:
      "London CNN —\nBritain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.\nThe ... [3348 chars]",
    description:
      "Britain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25848666/KV_DINO_CRISIS.png?quality=90&strip=all&crop=5.83125%2C0%2C88.3375%2C100&w=1200",
    publishedAt: "2025-01-29T12:18:00Z",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    title: "Heathrow Airport: UK backs third runway plans",
    url: "https://www.cnn.com/2025/01/29/uk/heathrow-airport-third-runway-expansion-gbr-intl/index.html",
  },
  {
    content:
      "London CNN —\nBritain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.\nThe ... [3348 chars]",
    description:
      "Britain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2154510445.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-01-29T12:18:00Z",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    title: "Heathrow Airport: UK backs third runway plans",
    url: "https://www.cnn.com/2025/01/29/uk/heathrow-airport-third-runway-expansion-gbr-intl/index.html",
  },
  {
    content:
      "London CNN —\nBritain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.\nThe ... [3348 chars]",
    description:
      "Britain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/2025-01-28t100509z-585738588-rc2xicakkpqx-rtrmadp-3-britain-economy-heathrow-airport.jpg?c=16x9&q=w_800,c_fill",
    publishedAt: "2025-01-29T12:18:00Z",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    title: "Heathrow Airport: UK backs third runway plans",
    url: "https://www.cnn.com/2025/01/29/uk/heathrow-airport-third-runway-expansion-gbr-intl/index.html",
  },
  {
    content:
      "London CNN —\nBritain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.\nThe ... [3348 chars]",
    description:
      "Britain’s government has backed a tortured effort to build a third runway at Heathrow, Europe’s busiest airport, throwing its weight behind a decades-old proposal that has been beset by political, legal and environmental challenges.",
    image:
      "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25848666/KV_DINO_CRISIS.png?quality=90&strip=all&crop=5.83125%2C0%2C88.3375%2C100&w=1200",
    publishedAt: "2025-01-29T12:18:00Z",
    source: {
      name: "CNN",
      url: "https://www.cnn.com",
    },
    title: "Heathrow Airport: UK backs third runway plans",
    url: "https://www.cnn.com/2025/01/29/uk/heathrow-airport-third-runway-expansion-gbr-intl/index.html",
  },
];

const Blog = () => {
  const [news, setNews] = useState(null);
  const [category, setCategory] = useState("general");
  const categoryList = [
    "general",
    "world",
    "nation",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];
  const apikey = import.meta.env.VITE_NEWS_API_KEY;
  const newsUrl = import.meta.env.VITE_NEWS_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getNews() {
      const controller = new AbortController();
      const { signal } = controller;
      let url = newsUrl + category + "&lang=en&country=us&max=10&apikey=" + apikey;

      try {
        let response = await fetch(url, { signal });
        let data = await response.json();
        setNews(data.articles);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    
      return () => {
        controller.abort();
      };
    }

    getNews();

  }, [category]);

  return (
    <main className='px-3 md:px-6 lg:px-10 '>
      {/* set a categoryList */}
      <div className='flex items-center flex-wrap gap-1 flex-1 md:gap-2 mt-2 w-full '>
        Category:
        {/* <select className='border' name='' id=''>
          {categoryList.map((item, index) => {
            return (
              <option
                key={index}
                onChange={() => setCategory(item)}
                className='mt-1 0 hover:bg-[#ccc] hover:text-black font-bold rounded-md bg-slate-500 card p-2 text-primary'
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select> */}
        {categoryList.map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => setCategory(item)}
              className='mt-1 0 hover:bg-[#ccc] hover:text-black font-bold rounded-md bg-slate-500 card p-2 text-primary'
            >
              {item} <span className='hidden md:inline'>News</span>
            </span>
          );
        })}
      </div>
      <h2 className='text-white'>{category}</h2>

      {/* render the content of the array/list */}
      {news ? (
        <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
          {news.map((item, index) => {
            return <BlogCard key={index} news={item} />;
          })}
        </div>
      ) : (
        <div className='flex justify-center items-center h-screen '>
          <div className='loader'></div>
        </div>
      )}
    </main>
  );
};

export default Blog;
