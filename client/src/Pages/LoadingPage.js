import {React,useState,useEffect} from "react";
import './LoadingPage.css';

function LoadingPage() {
    const [starting,setword] = useState("Connecting...");
    useEffect(() => {
        const timer1 = setTimeout(() => {
            setword("Synchronizing...");
        }, 2000);
        return () => clearTimeout(timer1);
    }, []);
    useEffect(() => {
        const timer2 = setTimeout(() => {
            setword("Initiating...");
        }, 4000);
        return () => clearTimeout(timer2);
    }, []);
    return (
        <div className="loading-container">
            <div className="fingerbox">
                <div className="fingerprint"></div>
                <h1 className="loadingline">{starting}</h1>
            </div>
        </div>
    );
}

export default LoadingPage;
