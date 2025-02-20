import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../component/BlogCard";
import bgImg from '/images/heroPic.jpg'

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
const Home = () => {
  const [news, setNews] = useState(null);
  const apikey = import.meta.env.VITE_NEWS_API_KEY;
  const newsUrl = import.meta.env.VITE_NEWS_URL;

  useEffect(() => {
    async function getNews() {
      const controller = new AbortController();
      const { signal } = controller;
      let url = newsUrl + "general&lang=en&country=us&max=10&apikey=" + apikey;
    
      try {
        let response = await fetch(url, { signal });
        let data = await response.json();
        let articles = data.articles;
        setNews(articles);
      } catch (error) {
        if (error.name !== "AbortError") {
          setNews(null);
        }
      }
    
      return () => {
        controller.abort();
      };
    }

    getNews()

  }, []);
  return (
    <>
      {/************** 
        Header Section
      **************/}
      <header style={{'backgroundImage': `url(${bgImg})`}} className='w-full h-[90vh] bg-no-repeat bg-cover'>
        <div className='w-full h-full  bg-[#1f1c1caa] text-white flex items-center justify-center '>
          <div className='text-center space-y-3'>
            <h1 className='capitalize font-bold md:text-lg lg:text-4xl'>
              we love to build web & mobile apps
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              atque.
            </p>
            <button className='button text-bg font-medium capitalize '>
              lean more
            </button>
          </div>
        </div>
      </header>

      <main className='px-3 md:px-6 lg:px-10 '>
        {/************** 
          Feature Section
        **************/}
        <section className='my-10 lg:mt-20'>
          {/* text heading */}
          <div className='text-center w-full space-y-2 md:w-1/2 mx-auto md:space-y-3'>
            <h2 className='header'>Our Feature</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* image + text */}
          <div className='mt-10 flex flex-col md:flex-row gap-6 lg:mt-12 lg:gap-10 items-stretch lg:items-center justify-between w-full h-[400px] '>
            <img
              className='w-full md:w-1/2 lg:w-[540px] rounded-md object-cover'
              src='./images/product1.jpg'
              alt='product image of a laptop'
            />

            <div className=' items-center text-center md:textleft md:items-start lg:text-left space-y-3 md:space-y-6 w-full lg:w-1/2 '>
              <h3 className=' font-bold '>Minimal and Modern design</h3>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  vel mollitia ab nostrum commodi nisi unde? Veniam excepturi id
                  animi consectetur dolores mollitia atque assumenda vero quod
                  ab, necessitatibus vel.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  vel mollitia ab nostrum commodi nisi unde? Veniam excepturi id
                  animi consectetur dolores mollitia atque assumenda vero quod
                  ab, necessitatibus vel.
                </p>
              </div>
              <button className='button'>Learn more</button>
            </div>
          </div>
        </section>

        {/************** 
          Blog
        **************/}
        <section className='mt-64 md:mt-20 lg:mt-20'>
          {/* intro text */}
          <div className='text-center  w-full lg:w-1/2 mx-auto '>
            <h2 className='header'>Our Blog</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aesentium
              blanditiis dolore explicabo error deleniti expedita neque, ad,
              saepe accusamus impedit reprehenderit a.
            </p>
          </div>
          {/* blog cards */}
          <div className='mt-10 grid grid-cols-1 w-full gap-10 md:grid-cols-2 lg:grid-cols-3 '>
            {news
              ? news.slice(0, 3).map((item, index) => {
                  return <BlogCard key={index} news={item} />;
                })
              : sampleNews.slice(0, 3).map((item, index) => {
                  return <BlogCard key={index} news={item} />;
                })}
          </div>
          {/* view more news */}
          <Link to='/blog/'>
            <button className='button block w-fit mx-auto mt-5 md:mt-10 self-center'>
              View More
            </button>
          </Link>
        </section>

        {/************** 
          About Us 
        **************/}
        <section className='mt-10 md:mt-20 bg-[#ccc] py-5 px-2 rounded-lg md:p-5 lg:p-28'>
          <div className='text-center w-full lg:w-1/2 mx-auto space-y-8'>
            <h2 className='header'>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              labore praesentium pariatur? Assumenda fuga ipsam, ex praesentium
              blanditiis dolore explicabo error deleniti expedita neque, ad,
              saepe accusamus impedit reprehenderit
            </p>
            <Link to='/about'>
              <button className='button mt-5'>Read More</button>
            </Link>
          </div>
        </section>

        {/************** 
          Testimonial 
        **************/}
        <section className='mt-10 md:mt-20 lg:p-20'>
          <div className='text-center w-2/3 mx-auto grid gap-8'>
            <h2 className='header'>Testimony</h2>
            <div className='grid gap-2 items-center'>
              <q className='font-thin'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi labore praesentium pariatur? Assumenda fuga ipsam, ex
                praesentium blanditiis dolore explicabo error deleniti expedita
                neque, ad, saepe accusamus impedit reprehenderit.
              </q>
              <img
                src='./images/review_image.jpg'
                className='size-10 rounded-full mx-auto'
                alt='customer review image'
              />
              <span>Jane miller</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
