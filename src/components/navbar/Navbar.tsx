import { useState } from "react";
import { navLinks } from "../../constants";
import "./Navbar.css"
import { wait } from "@testing-library/user-event/dist/utils";


const Navbar = () => {
    const [selected, setSelected] = useState(0);
    return <div className="nav">
            <div className="nav-card">
                {navLinks.map((navLink, id)=><div 
                className={id===selected ? "nav-card-option nav-card-option-active" : "nav-card-option"} 
                key={id}
                onClick={async ()=>  {
                    if (selected < id) {
                        for (var i = selected; i <= id; i++) {
                            setSelected(i);
                            await new Promise(resolve => setTimeout(resolve, 200/(id-selected)));
                        }
                    } else {
                        for (var i = selected; i >= id; i--) {
                            setSelected(i);
                            await new Promise(resolve => setTimeout(resolve, 200/(selected-id)));
                        }
                    }
                }}
                >
                    {navLink}
                </div>)}
            </div>
        </div>
}

export default Navbar;