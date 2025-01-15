import React from "react";
import news from "./../assets/Data";

const Main = () => {
  return (
    <main className="px-10">
    <h1 className="mt-10 text-primary">Latest News:</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {news.map((item) => {
          return (
            <div key={item.id} className="bg-card h-[calc(100% + 100px)] justify-between flex flex-col p-5 rounded-lg">
              <div>
                <h2 className="font-bold text-xl mb-3">{item.title}</h2>
                <p>{item.content}...</p>
              </div>

              <div className="flex w-full gap-10 justify-between mt-5">
                <span className="w-fit sm:text-xs">Author: {item.author}</span>
                <div className=" items-center w-fit font-medium text-link">
                    <a href="#" className="">Read more</a>
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
