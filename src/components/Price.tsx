import React, { useEffect, useState } from "react";
import axios from "axios";

function Price() {
  const [currentCrypto, setCurrentCrypto] = useState("btc");
  const [prices, setPrices] = useState({
    btc: { price: 0, change: 0, signal: 0 },
    eth: { price: 0, change: 0, signal: 0 },
    bnb: { price: 0, change: 0, signal: 0 },
    doge: { price: 0, change: 0, signal: 0 },
    xrp: { price: 0, change: 0, signal: 0 },
    sol: { price: 0, change: 0, signal: 0 },
  });

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,dogecoin,ripple,solana&vs_currencies=usd&include_24hr_change=true"
        );

        setPrices({
          btc: {
            price: response.data.bitcoin.usd,
            change: response.data.bitcoin.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
          eth: {
            price: response.data.ethereum.usd,
            change: response.data.ethereum.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
          bnb: {
            price: response.data.binancecoin.usd,
            change: response.data.binancecoin.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
          doge: {
            price: response.data.dogecoin.usd,
            change: response.data.dogecoin.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
          xrp: {
            price: response.data.ripple.usd,
            change: response.data.ripple.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
          sol: {
            price: response.data.solana.usd,
            change: response.data.solana.usd_24h_change.toFixed(2),
            signal: Math.random() * 100,
          },
        });
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();

    // Fetch prices every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cryptos = ["btc", "eth", "bnb", "doge", "xrp", "sol"];
    let index = 0;

    const interval = setInterval(() => {
      setAnimation(true); // Start fade-out animation
      setTimeout(() => {
        index = (index + 1) % cryptos.length;
        setCurrentCrypto(cryptos[index]);
        setAnimation(false); // End fade-in animation
      }, 500); // Wait for fade-out before updating
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cryptoData = prices[currentCrypto];

  return (
    <div
      className={`flex flex-row gap-4 items-center justify-between fram1 h-auto sm:h-[120px] border border-[#37408B] rounded-xl px-6 pt-2 pb-6 mb-4 transition-opacity duration-500 ${
        animation ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <p className="text-xl sm:text-4xl font-light text-green-400">
          ${cryptoData.price.toLocaleString()}
        </p>
        <p className=" text-xs sm:text-sm text-gray-200">{currentCrypto.toUpperCase()}/USD</p>
      </div>
      <div className="text-center">
        <p
          className={`text-xl sm:text-4xl font-light ${
            cryptoData.change >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {cryptoData.change}%
        </p>
        <p className=" text-xs sm:text-sm text-gray-200">24h </p>
      </div>
      <div className="text-center">
        <p className="text-xl sm:text-4xl font-light text-green-400">
          {cryptoData.signal.toFixed(0)}%
        </p>
        <p className=" text-xs sm:text-sm text-gray-200">Signal </p>
      </div>
    </div>
  );
}

export default Price;