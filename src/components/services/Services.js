import React from 'react'
import './Services.css'
import services from '../../assets/services.jpg'
import webservices from '../../assets/web.png'
import app from '../../assets/app.png'
import ui from '../../assets/ui.png'
import graphic from '../../assets/graphic.png'
import seo from '../../assets/seo.png'
import project from '../../assets/project.png'
import software from '../../assets/software.png'
import qa from '../../assets/qa.png'
import devops from '../../assets/devops.png'

const  Services = () => {
  return (
    <>
        <div className=''>
            <div className='row'>
                <div className='col-sm-12'  data-aos="fade-right">
                    <img className='img-fluid w-100 ' src={services} alt='services' />
                </div>
            </div>
            <div className='container'>
                <div className='text-center'  >
                    <h1 className='mt-4 color_size'  data-aos="zoom-out"> Our Services</h1>
                    <h3 className='Reliabit'  data-aos="fade-left">Relia-Bit Solutions mission is to empower businesses and individuals through cutting-edge software solutions. We are committed to delivering excellence in every project, harnessing technology to drive innovation and transformation.</h3>
                </div>
                <div className='row mt-4 pt-4 mb-4'>
                    <div className='col-sm-4'>
                        <div className='bg-white px-3 py-4 card_height'  data-aos="zoom-out">
                            <img src={webservices} alt='web' className='w-50' />
                            <h4 className='text-primary'>Web Development Services</h4>
                            <p className=''>Relia-Bit solutions provides top-notch web development services to create modern and functional websites that meet our clients' needs.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='bg-white px-3 py-3 card_height'  data-aos="zoom-out">
                            <img src={app} alt='web' className='w-50' />
                            <h4 className='text-primary mt-2'>App Development Services</h4>
                            <p className=''>Our team of experienced developers uses the latest technologies and industry best practices to create high-quality mobile apps that exceed your expectations.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='bg-white px-3 py-4 card_height'  data-aos="zoom-out">
                            <img src={ui} alt='web' className='w-50' />
                            <h4 className='text-primary'>UI/UX Design</h4>
                            <p className=''>Our expert designers use the latest UI/UX design principles to develop interfaces that are aesthetically pleasing, easy to use, and engaging.</p>
                        </div>
                    </div>
                </div>


                <div className='row mt-4 pt-4 mb-4'>
                    <div className='col-sm-4'  data-aos="zoom-out">
                        <div className='bg-white px-3 py-4 card_height'>
                            <img src={graphic} alt='web' className='w-30' />
                            <h4 className='text-primary'>Graphic design</h4>
                            <p className=''>Our graphic designers are passionate about creating stunning designs that captivate audiences and elevate brands.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'  data-aos="zoom-out">
                        <div className='bg-white px-3 py-3 card_height'>
                            <img src={seo} alt='web' className='w-50' />
                            <h4 className='text-primary mt-2'>SEO & Content writting</h4>
                            <p className=''>Enhance your online visibility and engage your target audience through our expert SEO and content writing services tailored for TechCreator's unique identity.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'  data-aos="zoom-out">
                        <div className='bg-white px-3 py-4 card_height'>
                            <img src={project} alt='web' className='w-50' />
                            <h4 className='text-primary'>Project management</h4>
                            <p className=''>Our experienced project managers work closely with clients to ensure that projects are completed on time, within budget, and to the highest standards.</p>
                        </div>
                    </div>
                </div>

                <div className='row mt-4 pt-4 mb-4'>
                    <div className='col-sm-4  data-aos="zoom-out"'>
                        <div className='bg-white px-3 py-4 card_height'>
                            <img src={qa} alt='web' className='w-30' />
                            <h4 className='text-primary'>QA Testing</h4>
                            <p className=''>Our team of experienced testers uses the latest testing methodologies and tools to provide thorough testing that identifies defects and ensures that your software performs flawlessly.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'  data-aos="zoom-out">
                        <div className='bg-white px-3 py-4 card_height'>
                            <img src={software} alt='web' className='w-50' />
                            <h4 className='text-primary mt-4'>Software Maintenance</h4>
                            <p className=''>Our team of experts offers timely and cost-effective maintenance solutions to keep your software up-to-date and secure.</p>
                        </div>
                    </div>
                    <div className='col-sm-4'  data-aos="zoom-out">
                        <div className='bg-white px-3 py-4 card_height'>
                            <img src={devops} alt='web' className='w-50' />
                            <h4 className='text-primary'>DevOps</h4>
                            <p className=''>Our team of skilled engineers can help you integrate automation, testing, and deployment processes to ensure faster time-to-market and higher quality products.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Services