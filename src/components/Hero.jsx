import React, {useState, useEffect} from "react"
import Btc from "../assets/btc.png"

function getPrice(symbol, data) {
    for (let i = 0; i < data.length; i++){
        if (data[i].symbol === symbol) {
            return(data[i].last_trade_price);
        }
    }
}

function Hero(){

    const [btcPrice, setBtcPrice] = useState("Loading...");
    const [refetch, setRefetch] = useState(false);

    const url = "https://api.blockchain.com/v3/exchange/tickers";

    useEffect(()=>{
        fetch(url)
            .then((data)=>data.json())
            .then((data)=>{
                setBtcPrice(getPrice("BTC-USD", data));
            });
        
    }, [refetch]);

    return(
        <>
            <div className="flex justify-center">
                <h1>Trade crypto at <span className="text-purple-600">0%</span> fees*</h1>
            </div>
            <br/>

            <div className="flex flex-row justify-center">
                <div>
                    <img src={Btc}></img>
                    Bitcoin: {btcPrice}
                    <div></div>
                </div>
                
                <div>
                    <img src={Btc}></img>
                    Etherium
                </div>

                <div>
                    <img src={Btc}></img>
                    Dodgecoin
                </div>
            </div>
        </>
    );
}

export default Hero