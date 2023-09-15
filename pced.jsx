import React from 'react';
import flier from '../images/pced_flier.png'
import './pced.css'
import nationalgrid from '../images/National_Grid.png'
import turner from '../images/turner.png'
import sodexo from '../images/sodexo.png'
import progsit from '../images/progsit.jpg'
import verizon from '../images/image.png'
import hla from '../images/harlemlaunch.png'


function PCED(){

    return(
        <div className='app-container'> 
            <div className='heading'>
            <h1> 2023 PCED </h1>
            <h3> The Latin American Engineering Student Association (LAESA), chapter of the Society of Hispanics Professional Engineers (SHPE), is proud to announce the 29th annual Pre-College Engineering Day (PCED). </h3>
            <img src={flier} alt ='flier'/>
            <div className='pced-section'>  
            <h3> The goal  for this year's PCED is to introduce the younger Latinx and Black community to the world of aeronautics while exposing them to different STEM-related careers (Science, Technology, Engineering, and Mathematics)</h3>
            <h3>This event includes workshops led by sponsors, lab tours, a team-building project, and an engineering orientation session. This year's theme will be related to aerospace, but we will be exposing the participating students to several different engineering and science disciplines</h3>
        </div>
        </div>
            
        <div className='companies'>
            <h1> Meet the Companies</h1> 
            <div className='companies-row'>
                <div className='companies-col'>
                <img className='nationalgrid'src={nationalgrid} alt='nationalgrid'/>
                </div>

                <div className='companies-col'>
                <img className='sodexo'src={sodexo} alt='sodex'/>
                </div>

                <div className='companies-col'>
                <img className='turner'src={turner} alt='turner'/>
                </div>

            </div>
           
        </div>

        <div className='team'> <h1> Meet the Team</h1>
             <h1> Directors </h1>
            <h1> Logistics </h1>
            <h1> Projects</h1>
            <h1> Schools </h1>
            <h1> Budget </h1>
            </div>
      

        </div>
    )
}

export default PCED;