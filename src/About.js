import React from 'react';
import './App.css';
 



function About() {
  return (

    <div>
    
     <h1>About</h1>

     <div className="team">
       <h2>We are a team that creates awesome websites for you.</h2>
       <div className="members">
         <div className="members-one">
         <div className="members-image">
           <img src="https://cdn.pixabay.com/photo/2019/12/11/17/11/john-lennon-4688793_960_720.png" alt="" srcset=""/>
         </div>
         <div className="members-text">
          <p>Jimmy</p>
         </div>
         </div>

         <div className="members-two">
         <div className="members-image">
           <img src="https://cdn.pixabay.com/photo/2013/07/12/13/28/girl-147105_960_720.png" alt="" srcset=""/>
         </div>
         <div className="members-text">
          <p>Alice</p>
         </div>
         </div>

         <div className="members-three">
         <div className="members-text">
          <p>Sarah</p>
         </div>
         <div className="members-image">
           <img src="https://cdn.pixabay.com/photo/2017/01/31/15/27/animals-2025055_960_720.png" alt="" srcset=""/>
         </div>
         </div>

         <div className="members-four">
         <div className="members-text">
          <p>Tommy</p>
         </div>
         <div className="members-image">
           <img src="https://cdn.pixabay.com/photo/2016/06/14/13/46/guy-1456569_960_720.png" alt="" srcset=""/>
         </div>
         </div>


         
       </div>
     </div>
      
    </div>
  );
}

export default About;