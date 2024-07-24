import React from "react";
import './TechSkill.css';
import './SoftSkill.css';
import Speedo from "./Speedo";
function Skills(a){
    return(
        <div className="Skillspagebox">
            <div className="TechSkills">
                <div className="stick" style={{borderLeft:'2px solid white'}}>
                    <h1 className="Techtitle">
                        Tech - Languages
                    </h1>
                </div>
                <div className="skill1">
                    <Speedo name="C" percentage={80} className="C"/>
                    <Speedo name="C++" percentage={50} className="Cpp"/>
                    <Speedo name="Java" percentage={85} className="Java"/>
                </div>
                <div className="skill1">
                    <Speedo name="HTML" percentage={60} className="HTML"/>
                    <Speedo name="CSS" percentage={70} className="CSS"/>
                    <Speedo name="JavaScript" percentage={55} className="JavaScript"/>
                    <Speedo name="MERN Stack" percentage={65} className="ReactJs"/>
                </div>
                <div className="skill1">
                    <Speedo name="Python" percentage={60} className="Python"/>
                    <Speedo name="Linux" percentage={45} className="NodeJs"/>
                    <Speedo name="SQL" percentage={55} className="Mongodb"/>
                </div>
            </div>
            <div className="softskills">
                <h2 className="SoftTitle">Soft - Skills</h2>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <div id="s1" className="sskill">
                        <h3>Problem Solving</h3>
                        <div className="progressbar">
                            <span style={{width:'80%'}}></span>
                        </div>
                    </div>
                    <div id="s2" className="sskill">
                        <h3>Critical Thinking</h3>
                        <div className="progressbar">
                            <span style={{width:'90%'}}></span>
                        </div>
                    </div>
                    <div id="s3" className="sskill">
                        <h3>TeamWork</h3>
                        <div className="progressbar">
                            <span style={{width:'95%'}}></span>
                        </div>
                    </div>
                    <div id="s4" className="sskill">
                        <h3>Communication</h3>
                        <div className="progressbar">
                            <span style={{width:'85%'}}></span>
                        </div>
                    </div>
                    <div id="s5" className="sskill">
                        <h3>Adaptability</h3>
                        <div className="progressbar">
                            <span style={{width:'98%'}}></span>
                        </div>
                    </div>
                    <div id="s6" className="sskill">
                        <h3>Leadership</h3>
                        <div className="progressbar">
                            <span style={{width:'93%'}}></span>
                        </div>
                    </div>
                    <div id="s7" className="sskill">
                        <h3>Creativity</h3>
                        <div className="progressbar">
                            <span style={{width:'90%'}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;