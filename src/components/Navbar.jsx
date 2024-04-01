import { Link } from "react-router-dom";

function Navbar(){

    return(

        <nav className="mb-4 border-solid border-black border-b-4 p-4 text-2xl">
            <div className="flex flex-row justify-center">
                <Link className="mr-4" to="/">Home</Link>
                <ul className="flex flex-row justify-center">
                    <li>
                        <Link className="mr-4" to="/market">Live Market</Link>
                    </li>
                    <li>
                        <Link className="mr-4" to="/about">About us</Link>
                    </li>
                    <li>
                        <Link className="mr-4" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Navbar