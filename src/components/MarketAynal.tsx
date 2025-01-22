import React from "react";
import Price from "./Price";

const MarketAnalysis = () => {
  return (
    <div className=" text-white  flex flex-col sm:flex-row items-center p-4">
      {/* Market Analysis Section */}
      <div className="w-full max-w-md   px-2">
        <h2 className="text-lg font-semibold text-white mb-4">
          Market Analysis
        </h2>
  <Price/>

        {/* Analysis Section */}
        <h3 className="text-lg font-semibold text-[#fff] mb-4">
          Analyzing: BTC
        </h3>
      <div className="fram2 border border-[#D64FEB] h-full rounded-xl">
      <div className="rounded-md px-4 pt-4 mb-4">
          <h4 className="text-md font-semibold text-[#fff] mb-4">
            Technical Analysis: BTC
          </h4>
          <div className="mb-4">
            {/* Placeholder for the graph */}
            <img src="images/chart.png" alt="" className=" mx-auto " />
          </div>
          <h4 className="text-sm font-semibold text-white mb-4">
            Sentiment Analysis: BTC
          </h4>
          <div className="flex justify-between items-center mt-2 relative ">
          <img src="images/rate.png" alt=""  />
          <img 
            src="images/pol.png" 
            alt="" 
            className="w-auto h-auto max-w-full absolute top-[36%] left-[20%] animate-slide-left-once" 
          />
          </div>
        </div>

 
      </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
