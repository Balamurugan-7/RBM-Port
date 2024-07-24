import React from "react";
import './Nav.css';
// import { Link } from "react-router-dom";
import fb from '../media/fb.svg';
import lin from '../media/linkedin.svg';
import insta from '../media/insta.svg';
import git from '../media/github.svg';
import socb from '../media/socb.svg';
import './Social.css';
function Nav(){
    function showbox(){
        document.getElementById('socbut1').style.display = 'none';
        document.getElementById('socbut2').style.display = 'flex';
        document.getElementById('socialbox').style.animation = 'Showbar 1.5s forwards';
    }
    function hidebox(){
        document.getElementById('socbut2').style.display = 'none';
        document.getElementById('socbut1').style.display = 'flex';
        if(window.innerWidth <= 425)
            document.getElementById('socialbox').style.animation = 'Hidebarmob 1.5s';
        else
            document.getElementById('socialbox').style.animation = 'Hidebar 1.5s';
    }
    return (
        <div id="social-con">
            <div id="socialbox">
                <div id="socialbutton"> 
                    <img src={socb} alt="" id="socbut1" onClick={()=>{showbox()}}/>
                    <img src={socb} alt="" style={{display:'none'}} id="socbut2" onClick={()=>{hidebox()}}/>
                </div>
                <div className="socialmedia">
                    <img src={lin} alt="" className="fbicon" onClick={()=>window.open('https://www.linkedin.com/in/balamurugan-r-470ba2267/')}/>
                    <img src={git} alt="" className="fbicon" onClick={()=>window.open('https://github.com/RBM05')}/>
                    <img src={insta} alt="" className="fbicon" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100042306348708')}/>
                    <img src={fb} alt="" className="fbicon" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100042306348708')}/>
                </div>
            </div>
        </div>
    );
}
export default Nav;