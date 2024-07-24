import React, { useEffect, useState ,useRef } from 'react';
import './Project.css';
import drone from '../media/bg1.jpg';
import TNR from '../media/tnrlogo.png';
import PWD from '../media/PW_analyser_logo.png';

function Project(){
    return(
        <div className='projectsbox'>
            <div id='card1box'>
                <div id='card1'>
                    <div className='card1front'>
                        <div id='project1card'>
                            <img id='projectsimg' src={drone} alt=''/>
                            <h3 id='projectname'>Night Surveillance Drone</h3>
                        </div>
                    </div>
                    <div className='card1back'>
                        <div className='cardbackbox'>
                            <h3 className='prodisc'>
                                We developed a project model for a multi-speciality drone.
                                As an initial stage, we developed a night surveillance drone.
                                Drone that do surveil the city and alert the crime branch of the area.
                                We developed prototype of a night surveillance drone and went for many pitching events.
                                We waited for the fund. In the mean time, I jumped into the web-development and skilled here.
                                And now the project is being carried by our juniors
                            </h3>
                            <h4 className='demodisc'>Want to know more about my project...?</h4>
                            <div style={{display:'flex',justifyContent:'space-around'}}> 
                                <div style={{cursor:'pointer'}} id='demobutton' onClick={()=>{
                                    window.open("https://github.com/Balamurugan-7/Night-Surveillance-Drone");
                                }}>view</div>
                            </div>
                            <div className='projectinline'></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id='card2box'>
                <div id='card2'>
                    <div className='card2front'>
                        <div id='project2card'>
                            <img id='projectsimg' src={TNR} alt=''/>
                            <h3 id='projectname'>TN - ROVER</h3>
                        </div>
                    </div>
                    <div className='card2back'>
                        <div className='cardbackbox'>
                            <h3 className='prodisc'>A MERN Stack project...<br />
                            Website that unveiling the mysteries and famouses of each and every districts in Tamilnadu...
                            </h3>
                            <h4 className='demodisc'>Want to try demo of my project...?</h4>
                            <div style={{display:'flex',justifyContent:'space-around'}}> 
                                <div style={{cursor:'pointer'}} id='demobutton' onClick={()=>{
                                    window.open("https://rbm-tnrover.netlify.com");
                                }}>view</div>
                            </div>
                            <div className='projectinline'></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id='card3box'>
                <div id='card3'>
                    <div className='card3front'>
                        <div id='project3card'>
                            <img id='projectsimg' src={PWD} alt=''/>
                            <h3 id='projectname'>Meta Analyser</h3>
                        </div>
                    </div>
                    <div className='card3back'>
                        <div className='cardbackbox'>
                            <h3 className='prodisc'>
                                We developed a project using Python to get the meta-data of a image.
                                It has been done by using inbuilt packages in python.
                                We have done this as our mini-project in our academics.
                                The project code is uploaded in my Github.
                            </h3>
                            <h4 className='demodisc'>Want to know more about my project...?</h4>
                            <div style={{display:'flex',justifyContent:'space-around'}}> 
                                <div style={{cursor:'pointer'}} id='demobutton' onClick={()=>{
                                    window.open("https://github.com/Balamurugan-7/Meta-Analyser");
                                }}>view</div>
                            </div>
                            <div className='projectinline'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;