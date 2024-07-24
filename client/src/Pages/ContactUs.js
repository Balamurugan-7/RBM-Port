import React from 'react';
import './ContactUs.css';
import { Link , useNavigate} from 'react-router-dom';
import call from '../media/call.svg';
import mail from '../media/mail.svg';
import pin from '../media/pin.svg';
function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="contact-container">
        <h1 id='trackme'>Track me!</h1>
        <div className='contact-box'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.0493086102115!2d77.02108093836688!3d10.88010353131592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ffc9b3ea755%3A0xda7508a90583d22f!2sKarpagam%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1712997844384!5m2!1sen!2sin" 
                width="500" height="400" id='karpagam-map' 
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='contact-inner-box'>
                <div className='contacts'>
                    <div>
                        <h2 className='cmd' style={{marginTop:"7%"}}>&lt;&lt; Call &gt;&gt;</h2>
                        <a href="tel:+919489590862" id='callbutton'>
                            +91 94895 90862
                            <img src={call} className="callicon"/>
                        </a>
                    </div>
                    
                    <div>
                        <h2 className='cmdi2'>&lt;&lt; Email &gt;&gt;</h2>
                        <a href="mailto:someone@example.com" id='callbutton2'>
                            <img src={mail} className="callicon"/>
                            bala1rbm374@gmail.com
                        </a>
                    </div>

                    <div>
                        <h2 className='cmd'>&lt;&lt; Locate &gt;&gt;</h2>
                        <a href="https://maps.app.goo.gl/m44ymtMLonzRkZgP8" target='blank' id='callbutton'>
                            Karpagam College of Engineering,<br></br>
                            Coimbatore - 641 032.   
                            <img src={pin} className="callicon3"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ContactUs;