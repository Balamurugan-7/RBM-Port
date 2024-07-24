import {React,createRef,useRef} from "react";
import './Nav.css';
import { Link } from "react-router-dom";
import hi from '../media/emerald-home.png';
import ai from '../media/hacker-with-hoodie-on-technology-background-vector-28068572-removebg-preview.png';
import ri from '../media/resumeicon.png';
import pi from '../media/projectsicon.png';
import ci from '../media/contacticon.png';
function Nav(){
    const sec1 = createRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();

    const scrollHandler = (elmRef) =>{
        window.scrollTo({top : elmRef.current.offsetTop , behavior:"smooth"});
    }
 

    return (
        <div className="navbox">
            <div className="navbar">
                <div to="/home" className="homelink" onClick={()=>scrollHandler(sec2)}>
                    <img className='hicon' src={hi}/>
                    <span className="hspan">Home</span>
                </div>
                <div to="/abt" className="abtlink" onClick={()=>scrollHandler(sec2)}>
                    <img className='hicon' src={ai}/>
                    <span className="aspan">Tech</span>
                </div>
                {/* <div to="/resume" className="resumelink">
                    <img className='ricon' src={pi}/>
                    <span className="rspan">Resume</span>
                </div> */}
                <div to="/project" className="projectlink">
                    <img className='picon' src={pi}/>
                    <span className="pspan">Projects</span>
                </div>
                <div to="/contact" className="contactlink">
                    <img className='cicon' src={ci}/>
                    <span className="cspan">Contact</span>
                </div>
                
            </div>
        </div>
    );
}
export default Nav;