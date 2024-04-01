import React, {useState, useEffect} from "react"
import Btc from "../assets/btc.png"
import Eth from "../assets/eth.png"
import Doge from "../assets/doge.png"

function getPrice(symbol, data) {
    for (let i = 0; i < data.length; i++){
        if (data[i].symbol === symbol) {
            return(data[i].last_trade_price);
        }
    }
}

function Hero(){

    const [btcPrice, setBtcPrice] = useState("Loading...");
    const [ethPrice, setEthPrice] = useState("Loading...");
    const [dogePrice, setDogePrice] = useState("Loading...");
    const [refetch, setRefetch] = useState(false);

    const url = "https://api.blockchain.com/v3/exchange/tickers";

    useEffect(()=>{
        fetch(url)
            .then((data)=>data.json())
            .then((data)=>{
                setBtcPrice(getPrice("BTC-USD", data));
                setEthPrice(getPrice("ETH-USD", data));
                setDogePrice(getPrice("DOGE-USD", data));
            });
        
    }, [refetch]);

    function Refresh(){
        setRefetch(!refetch);
    }

    return(
        <>
            <div className="flex flex-col items-center">
                <h1>Trade crypto at <span className="text-purple-600">0%</span> fees*</h1>
                <h2 className="mt-2 text-lg">Only for premium members*</h2>
            </div>
            <br/>
            <div className="flex flex-row justify-center text-xl">
                <div className="m-8">
                    <img src={Btc} width="200"></img>
                    Bitcoin: <span className="text-green-500">{`${btcPrice}$ `} </span>
                    <button onClick={Refresh} className="border-solid rounded-md border-black border-2 bg-blue-700 p-1">
                        Refresh
                    </button>
                    <div></div>
                </div>
                
                <div className="m-8">
                    <img src={Eth} width="200"></img>
                    Etherium: <span className="text-green-500">{`${ethPrice}$ `} </span>
                    <button onClick={Refresh} className="border-solid rounded-md border-black border-2 bg-blue-700 p-1">
                        Refresh
                    </button>
                </div>

                <div className="m-8">
                    <img src={Doge} width="200"></img>
                    DogeCoin: <span className="text-green-500">{`${dogePrice}$ `} </span>
                    <button onClick={Refresh} className="border-solid rounded-md border-black border-2 bg-blue-700 p-1">
                        Refresh
                    </button>
                </div>
            </div>
        </>
    );
}

export default Hero