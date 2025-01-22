// import React from 'react'

// const Home = () => {
//   return (
//     <div className='px-3 md:px-6 lg:px-10'>Home</div>
//   )
// }

// export default Home




import React from "react";
import news from "../assets/Data";

const Blog = () => {
  
  let category = ["Latest", "Article", "Local"];

  return (
    <main className="px-3 md:px-6 lg:px-10">
      {/* set a category */}
      <div className="flex gap-5 w-full ">
        {category.map((item, index) => {
          return (
            <span key={index} className="mt-10 hover:bg-[#ccc] hover:text-black font-bold rounded-md bg-slate-500 card p-2 text-primary">
              {item} <span className="hidden md:inline">News</span>
            </span>
          );
        })}
      </div>

      {/* render the content of the array/list */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {news.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-card h-[calc(100% + 100px)] justify-between flex flex-col p-5 rounded-lg"
            >
              <div>
                <h2 className="font-bold text-xl mb-3">{item.title}</h2>
                <p>{item.content}...</p>
              </div>

              <div className="flex w-full gap-10 justify-between mt-5">
                <span className="w-fit sm:text-xs">Author: {item.author}</span>
                <div className=" items-center w-fit font-medium text-link">
                  <a href="#" className="">
                    Read <span className="hidden lg:inline">more</span>
                  </a>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
