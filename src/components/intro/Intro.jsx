import './intro.scss';
 import { init } from 'ityped';
 import {useEffect,useRef} from 'react';

export default function Intro() {
 const textRef=useRef();
 
 useEffect(()=>{
 init(textRef.current, { showCursor: true,
  backSpeed:  60,
  startDelay: 1500,
   strings: ['Front End Developer', 'Designer!' ] })
 },[])
 return (
  <div className="intro" id="intro">
   <div className="left">
    <div className="item-container">
     <img src="./assets/me3.png" alt="" />
    </div>
   </div>
   <div className="right">
    <div className="wrapper">
     <h2>Hi There, I'm</h2>
     <h1>Zeiad Haggag</h1>
     <h3>Freelance <span ref={textRef}></span></h3>
    </div>
    <a href="#portfolio">
     <img src="assets/down.png" alt="" />
    </a>
   </div>
   
  </div>
 )
}
