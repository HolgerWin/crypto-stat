import Btc from "../assets/btc.png"

function Hero(){

    return(
        <>
            <div className="flex justify-center">
                <h1>Trade crypto at <span className="text-purple-600">0%</span> fees*</h1>
            </div>
            <br/>

            <div className="flex flex-row justify-center">
                <div>
                    <img src={Btc}></img>
                    Bitcoin
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