import {React,useRef,useState,useEffect} from "react";
import './Home.css';
import './TechSkill.css';
import './SoftSkill.css';
import LoadingPage from "./LoadingPage";
// import Nav from "./Nav";
import Soc from "./Social";
import Pro from "./Project";
import Skills from "./Skillset";
import Temp1 from "./Temp1";
import Platforms from "./Platforms";
import ContactUs from "./ContactUs";
import Slide from './Slide';
import curplace from './Slide';

import prof from '../media/prof.jpg';
import bgvideo1 from '../media/bgv1.mp4';
import resb from '../media/link-solid.svg';
import resume from '../media/Bala.pdf';
import hi from '../media/emerald-home.png';
import ai from '../media/hacker-with-hoodie-on-technology-background-vector-28068572-removebg-preview.png';
import li from '../media/ai brain.png';
import pi from '../media/projectsicon.png';
import ci from '../media/contacticon.png';
// import Test from "./Test";
function Home(){
    var a= 3;
    const sec1 = useRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();
    const sec5 = useRef();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);
    
    const [Profname,setprof] = useState("CYBER_SECURITY_LEARNER");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
    const [name,setname] = useState("CYBER_SECURITY_LEARNER");
    const profarr = ["CYBER_SECURITY_LEARNER","WEB_DEVELOPER","PROBLEM_SOLVER"];
    // var count = 1;
    function profnamechange(){
        let it = 0;
        const hackinterval = setInterval(()=>{
            setprof(
                name.split("")
                .map((letter,index) => {
                    if(index<it){
                        return letter;
                    }
                    return letters[Math.floor(Math.random() * 27)]
                })
                .join(""));
                
                if(it>=name.length+30) 
                {
                    clearInterval(hackinterval);
                }
                it+=1/2;
            },30);
        }
        useEffect(() => {
            const profnametimer = setInterval(() => {
                
            }, 3000);
        }, []);
        
        var i=0;
        const [count,setcount] = useState(0);
        useEffect(() => {
            const proftimer = setInterval(() => {
                setname(profarr[count]);
                setcount(count+1);
                // console.log(count)
                profnamechange();
            }, 4000);
    }, []);

    const hidecertmodal = () =>{
        document.getElementById("c-modal").style.animation = "hidemodal 1.5s forwards";
    }

    const scrollHandler = (elmRef) =>{
        window.scrollTo({
            top : elmRef.current.offsetTop ,
            behavior:"smooth"
        });
    }
    
    function addanimationskills(){
        document.querySelector('.Techtitle').style.animation = 'animate .75s cubic-bezier(1, 1, 1, 1) forwards';
        document.querySelector('.SoftTitle').style.animation = 'Myfade 1.5s forwards';

        var bars = document.querySelectorAll('#bar');
        for(var i=0;i<bars.length;i++)
        {
            bars[i].style.animation = 'rotate 2s ease-in-out';
        }
        var needs = document.querySelectorAll('#needle');
        for(var i=0;i<needs.length;i++)
        {
            needs[i].style.animation = 'rotate 2s ease-in-out';
        }
        var suc = document.querySelectorAll('.success');
        for(var i=0;i<suc.length;i++)
        {
            suc[i].style.animation = 'Myfade 1.5s forwards';
        }
        var pbars = document.querySelectorAll('.progressbar');
        for(var i=0;i<pbars.length;i++)
        {
            pbars[i].style.animation = 'animate 2s forwards';
        }
    }
    function addanimationslearn(){
        document.querySelector('#cover').style.animation = 'slideRight 2s forwards';
        document.querySelector('.flip-book').style.animation = 'myopac 3s forwards';
    }
    window.addEventListener('scroll' , reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i=0;i<reveals.length;i++)
        {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint =500;

            if(revealtop < windowheight - revealpoint)
            {
                reveals[i].classList.add('active');
                if(reveals[i].id == "Skills")
                {
                    addanimationskills();
                    // document.querySelector('#bar').style.animation = 'rotate 2s ease-in-out';
                    // document.querySelector('#needle').style.animation = 'rotate 2s ease-in-out';
                    // document.querySelector('.progressbar').style.animation = 'animate 2s forwards';
                }
                if(reveals[i].id == "Edu")
                {
                    addanimationslearn();
                }
            }
            else
                reveals[i].classList.remove('active');

        }
    }

    let s = "<..WELCOME!../>"
    return(
        <div className="wholecontainer">
            {loading ? (
                <LoadingPage />
            ) : (
                <div>
                    <div className="vid">
                        <video autoPlay loop muted id="video">
                            <source src={bgvideo1} type="video/mp4" />
                        </video>
                    </div>
                    <div  className="wellimg"></div>
                    <h1 className="introtitle">{s}
                    </h1>

                    <div className="navbox">
                        <div className="navbar">
                            <div to="/home" className="homelink" onClick={()=>scrollHandler(sec1)}>
                                <img className='hicon' src={hi}/>
                                <span className="hspan">Home</span>
                            </div>
                            <div to="/abt" className="abtlink" onClick={()=>scrollHandler(sec2)}>
                                <img className='hicon' src={ai}/>
                                <span className="aspan">Tech</span>
                            </div>
                            <div to="/resume" className="resumelink" onClick={()=>scrollHandler(sec3)}>
                                <img className='ricon' src={li}/>
                                <span className="rspan">Learning</span>
                            </div>
                            <div to="/project" className="projectlink" onClick={()=>scrollHandler(sec4)}>
                                <img className='picon' src={pi}/>
                                <span className="pspan">Projects</span>
                            </div>
                            <div to="/contact" className="contactlink" onClick={()=>scrollHandler(sec5)}>
                                <img className='cicon' src={ci}/>
                                <span className="cspan">Contact</span>
                            </div>
                        </div>
                        <Soc/>
                    </div>


                    <div className='homecontainer'>

                        <div className="cert-modal" id="c-modal">
                            <div className="cert-inner-modal">
                                <button id="closeModal" onClick={hidecertmodal}>X</button>
                                <h2 id="certmodalname">Title</h2>
                                <img id="certmodalimg" src={curplace.img} alt="Picture"/>
                            </div>
                        </div>

                        <div ref={sec1} className="reveal" id='home'>
                            <div id="picturecontainer">
                                <img src={prof} alt='Picture' className="picture"/>
                            </div>
                            <div className='welcome'>
                                <div className="HomeTitle" style={{fontFamily:'font2'}}>
                                    I'm 
                                    <h1 className="myname">BALAMURUGAN</h1>
                                    <h4 value="CYBER SECURITY RESEARCHER" className="professionname" id="hacker" style={{textAlign:'center',marginTop:'1vh'}}>
                                        &gt;&gt; {Profname}
                                    </h4>
                                </div>
                                <a href={resume} download="Balamurugan Resume" id='cvbutton'>
                                    <img src={resb} className="resicon"/>
                                    Get CV
                                </a>
                            </div>
                        </div>

                        <div ref={sec2} className="Tech reveal" id="Skills">
                            <h1 className="SkillsTitle">SKILLS Pack</h1>
                            <Skills a='2'/>
                        </div>

                        <div className="Tech" id="Certifications">
                            <h1 className="SkillsTitle">CERTIFICATIONS</h1>
                            <div className="corouselbox">
                                <Slide/>
                            </div>
                        </div>

                        <div ref={sec3} className="Tech reveal" id="Edu">
                            <h1 className="SkillsTitle">LEARNING Cache</h1>
                            <div className="Learnbox">
                                <div className="Internbox">
                                    <h2 className="internshiptitle">INTERNSHIPS</h2>
                                    <Temp1/>
                                </div>
                                <div className="platbox">
                                    <h2 className="platformtitle">PLATFORMS</h2>
                                    <Platforms/>
                                </div>
                            </div>
                        </div>
                        <div ref={sec4} className="Tech reveal" id="Project">
                            <h1 className="SkillsTitle">Projects</h1>
                            <Pro/>
                        </div>
                        <div ref={sec5} className="Tech reveal" >
                            <ContactUs/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;