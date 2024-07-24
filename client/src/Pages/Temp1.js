import React from 'react';
import './Temp1.css';
import eh from '../media/Ethical_Hacking_logo.jpg';
import wd from '../media/Web_Development_logo.png';
import { internarr } from './InternList';
const Temp1 = () => {
	const showinternmodal = (name) =>{
		let iimg = internarr[name];
		console.log(iimg, internarr, name);
        document.getElementById("c-modal").style.animation = "showmodal 1.5s forwards";
        document.getElementById("certmodalimg").src = iimg;
        document.getElementById("certmodalname").innerHTML = name;
    }
	return (
		<div className="book">
			<input type="checkbox" id="c1" />
			<input type="checkbox" id="c2" />
			<input type="checkbox" id="c3" />
			<div id="cover">
				<img src={eh} alt="Cover" />
			</div>
			<div className="flip-book">
				<div className="flip" id="p1">
					<div className="front">
						<h2>Ethical Hacking</h2>
						<h5>@Hackup Technology, Coimbatore</h5>
						<p id='interndesc'>
							I have gained some practical work experience in Cyber field.I have learnt pen-testing and had an experience with some tools like Burpsuite, Metasploit, Wireshark, NMap...
						</p>
						<p id='dlink' onClick={()=>showinternmodal("Ethical_Hacking")} style={{color:"green",textDecoration:'none',cursor:'pointer'}}>&lt; View Certificate /&gt;</p>
						<label className="next-btn" htmlFor="c1">Next</label>
					</div>
					<div className="back">
						<img src={wd} alt="Page 2" />
						<label className="back-btn" htmlFor="c1">Back</label>
					</div>
				</div>
				<div className="flip" id="p2">
					<div className="front">
						<h2>Web Development</h2>
						<h5>@Durga Tech,Coimbatore</h5>
						<p id='interndesc'>
							I have learnt how to use REACT Js over HTML and its advantages in creating a webpage.I also learned to use NodeJs along with ExpressJs to create a server side application and thus, host the web application.
						</p>
						<p id='dlink' onClick={()=>showinternmodal("Wev_Development")} style={{color:"green",textDecoration:'none',cursor:'pointer'}}>&lt; View Certificate /&gt;</p>
						{/* <label className="next-btn" htmlFor="c2">Next</label> */}
					</div>
					<div className="back">
						<img src={eh} alt="Page 3" />
						<label className="back-btn" htmlFor="c2">Back</label>
					</div>
				</div>
				{/* <div className="flip" id="p3">
					<div className="front">
						<h2>Hacking</h2>
						<h5>Hack</h5>
						<p id='interndesc'>
							I have learnt how to use REACT Js over HTML and its advantages in creating a webpage.I also learned to use NodeJs along with ExpressJs to create a server side application and thus, host the web application.
						</p>
						<p id='dlink' onClick={()=>showinternmodal("Web_Development")} style={{color:"green",textDecoration:'none',cursor:'pointer'}}>&lt; preview /&gt;</p>
						<label className="next-btn" htmlFor="c3">Next</label>
					</div>
					<div className="back">
						<div style={{transform:'rotate(-45deg)',width:'fit-content',transformOrigin:'center'}}> <h1 style={{fontSize:'large',width:"100%",marginTop:'60%'}}>Learning Continues...</h1></div>
						<label className="back-btn" htmlFor="c3">Back</label>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Temp1;
