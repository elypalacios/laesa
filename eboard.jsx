import Eric from '../images/Headshot Martinez.Erick.jpg'
import Tim from '../images/Headshot Tim.jpg'
import Elbin from '../images/Headshot Madera.Elbin.jpeg'
import Edwin from '../images/Linked In Photo.jpg'
import Elizabeth from '../images/Headshot Palacios.Elizabeth.png'
import './eboard.css'

function Eboard(){
    return(
        <div>
            <h1 className='title1'> Eboard 2023-2024 </h1>
            <div className='eboard-2023'>
                <div className='rows'>
                <img className='Eric'src={Eric} alt='Eric'/>
                     <p className='cols'>  Hola familia!! My name is Erick Martinez and I am a Senior Mechanical Engineering student. This is my 2nd year serving LAESA-SHPE. My first time on the board I was the Internal Vice President for the Chapter but I am happy to now say that I am the new President and I am looking forward to this year with all the events me and my team will be doing to further the chapter’s mission. 
For the past year and a half that I’ve been in LAESA-SHPE, it has really felt like a family on campus where they are always helping you with finding internships, studying, or if you need friends to hang out with. 
I always enjoyed the idea of creating a path for those unsure of their future and LAESA-SHPE has shown for years they are also for the community. I plan on continuing LAESA-SHPE’s missions through the 5 pillars engaging not only with students on campus but with schools around the community
</p>  </div>
                <div className='rows'>
                <img className='Tim'src={Tim} alt='Tim'/>
                <p className='cols'> I am Timothy Galloway Jr, a senior Electrical Engineering student. I joined LAESA-SHPE in the Summer 2022. I became the Pre College Engineering Day 2023 CO- director. I enjoyed being in the club because of the community that was present.  I am the LAESA’s External Vice President for the 2023-2024 academic year and am very happy to be in this position. This is a great opportunity that I’m excited to take on. I want to be able to raise awareness in the STEM field for the communities that I grew up in. My dream is to work in the electronics field and pursue a career in Robotics. </p>
                
                </div>
                
                <div className='rows'>
               <img className='Elbin' src={Elbin} alt='Elbin'/>
               <p className='cols'> Saludos! My name is Elbin Madera Jr. I am a senior Civil Engineering student with a minor in economics. I am excited and committed to be serving and being part of the LAESA-SHPE E-board. I look forward to expanding our familia and making sure we continue to make strides towards our best versions of ourselves. 

I joined LAESA-SHPE in the Fall of 2022 and became part of the Logistics team for the 28th Pre-College Engineering Day. The teamwork and dedication of all my peers gave me insight into what kind of professional organization LAESA-SHPE is all about which motivated and enhanced my dedication in my studies as well as my personal and professional growth.

I look forward to bringing the familia positive energy throughout all the events and activities we have in store for all of you!  </p>
                </div>

                 
                <div className='rows'>
                <img className='Edwin' src={Edwin} alt='Edwin'/>
                <p className='cols'> My name is Edwin Cepeda, and I am a junior Electrical Engineering student. I joined LAESA during the Spring 2023 semester. It was my first semester at CCNY after transferring in. A friend of mine showed me LAESA and I quickly became friends with many members of the club. These members showed me how resourceful and pivotal being part of LAESA could be. I am excited to be a part of the new 2023-24 E-Board and to be able to provide the same welcoming energy as was given to me. I am ready to help our new team create a productive environment that allows not only LAESA, but its individual members to grow and accomplish their goals. </p>
                </div>

                <div className='rows'>
                <img className='Elizabeth' src={Elizabeth} alt='Elizabeth'/>
               <p className='cols'> Hello, my name is Elizabeth Palacios. I am a first generation Mexican student majoring in Computer Science with a minor in Psychology. I am the Secretary for LAESA 2023-2024. I joined LAESA in November 2022, hoping to find a community of engineers that can relate to me in all aspects from career ambitions to native language and foods. I am grateful to have meant LAESA as it has given me the aspiration to unlock my potential as a professional. I also want to be that aspiration to new incoming Latinx engineer students that are doubting a career in STEM. 

I interned for American Express as a Software Engineer Intern for Summer 2022 and 2023. I am also a SEEK student at CCNY, and I work at SEEK tutoring center (the PAL Center) and SEEK IT department to support incoming SEEK Freshmen obtain a strong academic standing throughout their first year at college. 

As LAESA Secretary, I am excited to not only grow within LAESA, but also to help others develop as professionals within the Famila this upcoming school year! </p>
               
                </div>
                
                
                
                
            </div>
             
        
        </div>
    )
}

export default Eboard;