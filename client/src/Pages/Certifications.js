import React, { useEffect, useState ,useRef } from 'react';
import './Certifications.css';
import i from '../media/github.png'
const Cert = () => {
  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(10);
  const [desX, setDesX] = useState(0);
  const [desY, setDesY] = useState(0);
  const [radius, setRadius] = useState(240);

  const odrag = useRef(null);

  useEffect(() => {
    init(1);
  }, []);

  const handlePointerDown = (e) => {
    clearInterval(odrag.timer);
    let sX = e.clientX;
    let sY = e.clientY;

    const handlePointerMove = (e) => {
      let nX = e.clientX;
      let nY = e.clientY;
      let desX = nX - sX;
      let desY = nY - sY;
      setDesX(desX);
      setDesY(desY);
      setTX((prevTX) => prevTX + desX * 0.1);
      setTY((prevTY) => prevTY + desY * 0.1);
      sX = nX;
      sY = nY;
    };

    const handlePointerUp = (e) => {
      odrag.Timer = setInterval(() => {
        setDesX((prevDesX) => prevDesX * 0.95);
        setDesY((prevDesY) => prevDesY * 0.95);
        setTX((prevTX) => prevTX + desX * 0.1);
        setTY((prevTY) => prevTY + desY * 0.1);
        playspin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playspin(true);
        }
      }, 17);
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  };

  const handleMouseWheel = (e) => {
    e.preventDefault();
    let d = e.deltaY / 20 || -e.detail;
    setRadius((prevRadius) => prevRadius + d);
    init(1);
  };

  const init = (delayTime) => {
    const aEle = document.querySelectorAll('.certimgs');
    const len = aEle.length;
    const rotation = 360 / len;

    aEle.forEach((ele, index) => {
      ele.style.transform = `rotateY(${index * rotation}deg) translateZ(${radius}px)`;
      ele.style.transition = `transform 1s`;
      ele.style.transitionDelay = `${delayTime || (len - index) / 4}s`;
    });
  };

  const applyTransform = (obj) => {
    let newY = tY;
    if (newY > 180) newY = 180;
    if (newY < 0) newY = 0;
    obj.style.transform = `rotateX(${-newY}deg) rotateY(${tX}deg)`;
  };

  const playspin = (yes) => {
    const ospin = document.getElementById('spin-container');
    ospin.style.animationPlayState = yes ? 'running' : 'paused';
  };

  return (
    <div id="CertContainer">
      <div id="drag-container" onPointerDown={handlePointerDown} onWheel={handleMouseWheel}>
        <div id="spin-container">
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <img className="certimgs" src={i} alt="certification" />
          <p>CERTIFICATIONS</p>
        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default Cert;
