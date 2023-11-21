import React from 'react';
import './Contact.css'
import contact_image from '../../assets/contact.svg'
function Contact() {
    return (
        <div className=' pb-4'>
            <div className='container padd_h1'>
                <div className='text-center'>
                    <h1 className='mt-4 color_size'  data-aos="fade-right"> Contact US</h1>
                    <h3 className=' p_welive'  data-aos="fade-up">Want to Say Something?
                        We are here to respond on your querries..</h3>
                </div>
                <div className='row mt-4'>
                    <div className='col-sm-6 text-center'>
                        <h3 className='color_size mb-4'  data-aos="fade-right">Lets talk about <br/> everything!</h3>
                        <img src={contact_image} className='img-fluid' data-aos="zoom-out"/>
                    </div>
                    <div className='col-sm-6' data-aos="zoom-out">
                        <div className=''>
                            <input className='form-control custom_control mb-2' placeholder='Name' />
                            <input className='form-control custom_control mb-2' placeholder='Email' />
                            <input className='form-control custom_control mb-2' placeholder='Subject' />
                            <textarea className='form-control custom_control mb-2 area_height' placeholder='Enter Your message' />
                            <button className='btn btn-primary contact_btn'>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-sm-12'>
                    <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13217.396551814603!2d72.4602618!3d34.0861953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dee532e47c961f%3A0xa217a1614e56f11b!2sCity%20Center%20Swabi!5e0!3m2!1sen!2s!4v1698662192486!5m2!1sen!2s"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
