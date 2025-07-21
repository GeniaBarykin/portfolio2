import { useState } from "react";
import { navLinks } from "../../constants";
import "./Navbar.css"


const Navbar = () => {
    const [selected, setSelected] = useState(0);
    return <div className="nav">
            <div className="nav-card">
                {navLinks.map((navLink, id)=><div 
                className={id===selected ? "nav-card-option nav-card-option-active" : "nav-card-option"} 
                key={id}
                onClick={()=> setSelected(id)}
                >
                    {navLink}
                </div>)}
            </div>
        </div>
}

export default Navbar;