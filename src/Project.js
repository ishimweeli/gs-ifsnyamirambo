import React from "react";
import "./Project.css";
import Project1 from './img/IMG_9313.JPG';
import Project2 from './img/class5.JPG';
import Project3 from './img/nursery.jpg';
import Project4 from './img/class10.JPG';
import Project5 from './img/TWITTER.jpg';
import Project6 from './img/JIMMY.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">events and anouncemens </h1>
        <p className="heading p__color">
          browse here for more info and announcements
        </p>
        <p className="heading p__color">
          and also recent news from school
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h1 className="project__text">Important documnents</h1>
                     <h4 className="project__text">if you need to view school regulations, school fees
                      and other document please click view details</h4>
                     <a href="https://drive.google.com/drive/u/4/folders/1UG7UpQGIcbvg2E4bgI98kwnVPpwERHaY" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h1 className="project__text">SCHOOL LATEST ANNOUNCEMENTS</h1>
                     <h4 className="project__text">latest announcements</h4>
                     <a href="https://drive.google.com/drive/u/4/folders/1fzn1t_iUm8cRs0CvfSk3Z-91ki7c6CUs" className="project__btn">View Details.........................</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">school awards </h5>
                     <h4 className="project__text">we intend to prepare special rewards for our best performers </h4>
                     <a href="https://docs.google.com/presentation/d/1Id6u1pb8_PSSmMkOfbrFJQ7_nOLDi6V8WZ2MMGzOVc4/edit?usp=sharing" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">PLAN D’AMERIOLATION DE LECOLE  2021-2025</h5>
                     <h4 className="project__text">I. HISTORIQUE DE LE’ECOLE
Le Groupe Scolaire Institut Filippo Smaldone est une école 
Libre-subsidié de programme connu sous le nom de 9YBE, </h4>
                     <a href="https://drive.google.com/file/d/1Evn3ptr3yr-xNqpLqM5u5JKKzbD8R-pn/view?usp=sharing" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">FOLLOW US ON TWITTER OTHER SOCIAL MEDIA</h5>
                     <h4 className="project__text">Follow us on twitter or twitter</h4>
                     <a href="https://twitter.com/home" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">TEACHERS MESSAGE</h5>
                     <h4 className="project__text">Thanks for everyone for supporting us . 
                     Knowing I have you in my corner makes a huge difference. </h4>
                     <a href="https://drive.google.com/file/d/1X3JZu_GD5LNG7c8ClIzBvd6BIxtXDXLq/view?usp=sharing" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
