import React from "react";
import "./Blog.css";
import "./smaldone";
import Blog1 from './img/smaldonepic.jpg';
import Blog2 from './img/inclusive.jpg';
import Blog3 from './img/ict.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">important articles</h1>
        <p className="heading p__color">
          This page contain all information that you need  Being parent, Our partner , or student 
        </p>
        <p className="heading p__color">
          .
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} style={{height:300}}   alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h1 className="project__text">	TRIBUTE TO SAINT FILIPPO SMALDONE  </h1>
                         <h4 className="project__text">marginalized people and deaf-mutes in Naples, who at the time were without appropriate forms of assistance.
His ..........................................
</h4>
                         <a href="https://www.vatican.va/news_services/liturgy/saints/ns_lit_doc_20061015_smaldone_en.html" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">RWANDA INCLUSIVE EDUCATION OVER VIEW</h5>
                         <h4 className="project__text">Inclusive education
The Ministry of Education defines inclusive education as the
 ‘process of addressing all learners’ g</h4>
                         <a href="https://education-profiles.org/sub-saharan-africa/rwanda/~inclusion" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">GS IFS  ICT in Education Policy implementation</h5>
                         <h4 className="project__text">Rwanda: ICT in Education Policy (Draft)
This ICT policy statement was designed to guide
 the process of the deployment and exploitation </h4>
                         <a href="https://en.unesco.org/icted/content/rwanda-ict-education-policy-draft" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
