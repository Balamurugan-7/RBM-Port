import React, { useEffect, useState ,useRef } from 'react';
import './Platforms.css';
import hackerrank from '../media/hackerrank.png';
import picoctf from '../media/picoctf.png';
import leetcode from '../media/leetcode.png';
import github from '../media/github logo.svg';
function Platforms(){
    return(
        <div className='platformbox'>
            <div className='platform-inner-box'>
                {/* <span className='platform-name name1'>PicoCTF</span>
                <span className='platform-name name2'>HackerRank</span>
                <span className='platform-name name3'>LeetCode</span>
                <span className='platform-name name4'>GitHub</span> */}
                <div className='platcircle'></div>
                <div className='platrow1'>
                    <div className='platlogodiv logo1' data-title='PicoCTF' onClick={()=>{window.open("https://play.picoctf.org/users/R_B_M_05")}}>
                        {/* <span class="tooltiptext tool1">PicoCTF</span> */}
                        <img className='platlogo' src={picoctf}/>
                    </div>
                </div>
                <div className='platrow2'>
                    <div className='platlogodiv logo2' data-title='HackerRank' onClick={()=>{window.open("https://www.hackerrank.com/profile/balarajendran123");}} >
                        {/* <span class="tooltiptext tool2">HackerRank</span> */}
                        <img className='platlogo' src={hackerrank}/>
                    </div>
                    <div className='platlogodiv logo3' data-title='LeetCode' onClick={()=>{window.open("https://leetcode.com/u/Bala-_-123/");}} >
                        {/* <span class="tooltiptext tool3">LeetCode</span> */}
                        <img className='platlogo' src={leetcode}/>
                    </div>
                </div>
                <div className='platrow3'>
                    <div className='platlogodiv logo4' data-title='Github' onClick={()=>{window.open("https://github.com/Balamurugan-7");}} >
                        {/* <span class="tooltiptext tool4">GitHub</span> */}
                        <img className='platlogo' src={github}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Platforms;