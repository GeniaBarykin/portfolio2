import { useState } from "react";
import { navLinks } from "../../constants";
import "./Navbar.css"
import { useDispatch } from "react-redux";


const Navbar = () => {
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    return <div className="nav">
            <div className="nav-card" >
                {navLinks.map((navLink, id)=><a className="nav-card-link" href={`#${navLink.id}`}>
                        <div 
                    className={id===selected ? "nav-card-option nav-card-option-active" : "nav-card-option"} 
                    key={id}
                    onClick={async ()=>  {
                        if (selected < id) {
                            for (var i = selected; i <= id; i++) {
                                setSelected(i);
                                await new Promise(resolve => setTimeout(resolve, 50));
                            }
                        } else {
                            for (i = selected; i >= id; i--) {
                                setSelected(i);
                                await new Promise(resolve => setTimeout(resolve, 50));
                            }
                        }
                    }}
                    >
                        {navLink.title}
                    </div>
                </a>)}
            </div>
        </div>
}

export default Navbar;