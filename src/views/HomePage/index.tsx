import React from "react";

const index = () => {
  return (
<section className="flex flex-col md:flex-row text-white text-center mx-auto bg-orange-200 h-auto rounded-md">
      <div className="w-[90%]">
        <div className="flex">
          <div className="flex gap-10 h-[200px] w-[80%] mx-auto m-10 px-10 bg-black">
            <div className="w-[50%] h-[200px] bg-red-600">
              <p>Image Will be here</p>
            </div>
            <div className="w-[50%] h-[200px] bg-yellow-600">
              Image text will be here
            </div>
          </div>
        </div>

        <div className="grid h-[200px] grid-cols-3 w-[80%] mx-auto bg-blue-400">
          <div className="bg-purple-300">label and graph chart</div>
          <div className="bg-purple-500">label and pie chart</div>
          <div className="flex flex-col gap-5 bg-purple-800">
            <div className="h-[50%] w-full bg-pink-500">
              team value count and icon
            </div>
            <div className="h-[50%] w-full bg-pink-800">
              team value count and icon
            </div>
          </div>
        </div>

        <div className="mt-10 grid h-[200px] grid-cols-3 w-[80%] mx-auto bg-orange-400">
          <div className="bg-slate-300">project 1</div>
          <div className="bg-indigo-500">project 2</div>
          <div className=" bg-purple-800">project 3</div>
        </div>
      </div>

      <div className="grid w-[30%] h-screen m-10 bg-black">
        <div className="bg-purple-600 ">
            Profile
        </div>
        <div className="bg-purple-500">
            Today 
        </div>
        <div className="bg-purple-800">
            Team
        </div>
      </div>
    </section>
  );
};

export default index;
