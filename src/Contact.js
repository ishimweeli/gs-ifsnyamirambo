import React from 'react';
import './Contact.css';
import contactImg from "./img/IMG_9325.JPG";
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">CONTACT US.</h1>
                            <p className="hire__text white">VISIT OUR SCHOOL IN WORKING HOURS MONDAY TO FRIDAY OF CONTACT US:</p>
                           <p className="hire__text white"><strong>+250787703798</strong> or email <strong>smaldoneinstitut@yahoo.fr</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <a href="https://forms.gle/9WN8XbG6BHW2UuXy7"  > <button className="btn contact pointer" >Submit</button></a>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact
