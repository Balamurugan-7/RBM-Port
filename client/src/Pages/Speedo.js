import React from "react";
import './Speedo.css';

const Speedo = ({name,percentage}) => {
    // const [successActive, setSuccessActive] = useState(false);
    let p= parseInt((percentage/100)*180);
    return (
        <div className="skillset" id={name}>
            <div className="gauge">
                <div id="progress">
                    <div id="bar" style={{ transform: `rotate(${p-90}deg)` }}></div>
                    <div id="needle" style={{ transform: `rotate(${p-90}deg)` }}></div>
                    <div id="skillperc" className={`success`}>
                        <h3>
                            {percentage}%
                        </h3>
                    </div>
                </div>
            </div>
            <h3 id="skillname">{name}</h3>
        </div>
    );
};

export default Speedo;
