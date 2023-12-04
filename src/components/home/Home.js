import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import client from '../../assets/home.png'
import softwaredev from '../../assets/innovation-team.png'
import softwaredevelopment from '../../assets/development.png'
import Architecture from '../../assets/architecture-consulting.jpg'
import consulting from '../../assets/high-performance.webp'
import monitor from '../../assets/monitor.webp'
import Api from '../../assets/api.jpg'
import report from '../../assets/report.png'
import coding from '../../assets/coding.jpg'
import home3 from '../../assets/inovate.webp'
import tech from '../../assets/tec.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './home.css'
function Home() {
  return (
    <>
      <div className='row mt-4 '>
        <div className=' offset-1 col-sm-6  mt-4' data-aos="fade-right" >
          <h1 className='mt-4 great'>Great software is built <br />by great teams</h1>
          <p className='we'>We are a dedicated  and professional<br /> team of web and mobile software  <br />developers</p>
          <Link to='/contact'><button className='btn btn-lg contact'> Contact us</button></Link>
          
        </div>
        <div className='col-sm-5' data-aos="fade-up">
          <img src={client} className='img-fluid' alt='client' />
        </div>
      </div>
      <div>
        <div className='container custom_margin bg-white pb-4'>
          <div className='row'>
            <div className='col-md-5 offset-1 pt-3 mt-4 pl-4' data-aos="fade-down-right">
              <h1 className='pt-4 mt-4 pl-4'><span className='color_size '>We help You </span><br /> <span className='text-secondary'>To develop successfull web and <br />mobile applications </span></h1>
            </div>
            <div className='col-md-6 pt-3' data-aos="fade-up" data-aos-anchor-placement="bottom-center">
              <p className='pt-4 mt-4 building text-secondary'>Building an incredible product takes more than just the ability to write code. It requires designers, testers, project managers, and product managers to come together and create something that sticks with the users. And we have all of that!</p>
              <p className='building text-secondary'>From helping you build and launch the product to maintaining and growing it, we have the correct skillset and mindset to do it all. Our team enjoys collaborating closely with the clients and loves problem-solving by using strategic and innovative thinking.</p>
              <p className='building text-secondary'>Set up a free consultation call to talk to our Project or Product Managers and get a free quote for your product idea!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container custom_margin bg-white'>
        <div className='row'>
          <div className='col-md-6 pt-3 mt-4 ' data-aos="fade-right">
            <img className='img-fluid' src={home3} alt='home3' />
          </div>
          <div className='col-md-6 pt-3 margin_pa' data-aos="fade-right">
            <h1 className='color_size pt-4 '> Innovative Software Solutions</h1>
            <p className='building text-secondary' >ReliByt is a technology software company that specializes in developing custom software solutions to help businesses of all sizes achieve their goals. Our team of experienced developers, designers, and project managers work closely with clients to understand their business needs and develop software solutions that streamline operations, increase efficiency, and drive growth.</p>
          </div>
        </div>
      </div>
      <div className='container custom_margin bg-white'>
                <div className='row'>
                    <div className='col-md-6 pt-3 sof_margin' data-aos="fade-right">
                        <h1 className='color_size pt-4 mt-4 '> Software Products Discovery</h1>
                        <p className='building text-secondary' >We understand that every project is unique, and we work closely with our clients to ensure that their software products are tailored to meet their specific business needs. Whether you need a web application, a mobile app, or a custom software solution to automate your business processes,ReliByt software company has the expertise and experience to help you achieve your goals.</p>
                    </div>
                    <div className='col-md-6 pt-3 mt-4' data-aos="fade-right">
                        <img className='img-fluid' src={tech} alt='tech' />
                    </div>
                </div>
            </div>

      {/* Clients */}
      <div className='row mt-4'>
        <div className='col-sm-12 text-center mt-3' data-aos="fade-down">
          <h1 className='color_size'> Why thousands of Clients choose <br /> Relia-bits Solutions</h1>
        </div>
      </div>
      {/* cards */}
      <div className='container-fluid  py-4'>
        <div className='container glass_effect p-4 card_border'>
          <div className='row'>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out" >
              <img src={softwaredevelopment} className='width'alt='development' />
              <h2 className='card_heading'>Software Development</h2>
              <p>Work with our team to develop sophisticated enterprise applications tailor-made for your business needs.</p>
            </div>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out" >
              <img src={softwaredev} className='width' alt='software' />
              <h2 className='card_heading'>Innovation Team Partnership</h2>
              <p>Augment your innovation team with seasoned professionals.</p>
            </div>
            <div className='col-sm-3 text-center pt-4 shdow' data-aos="zoom-out" >
              <img src={Architecture} className='width' alt='Arch' />
              <h2 className='card_heading mt-4 pt-4'>Architecture Consulting</h2>
              <p>Upgrade your infrastructure with innovative technologies and fine-grained optimizations.</p>
            </div>
            <div className='col-sm-3 text-center mt-3 shdow' data-aos="zoom-out" >
              <img src={consulting} className='width' alt='consult' />
              <h2 className='card_heading mt-3 pt-3'>High Performance Computing</h2>
              <p>Let our specialists handle every detail of your HPC cluster management.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out" >
              <img src={monitor} className='width' alt='monitor' />
              <h2 className='card_heading mt-1'>Custom Dashboards & Portals</h2>
              <p>There's no better way to manage your business workflows than a custom-built web portal.</p>
            </div>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out"  >
              <img src={Api} className='width'  alt='Api'/>
              <h2 className='card_heading'>API & Systems Integrations</h2>
              <p>Our experience with thousands of APIs and platforms means your data integration is robust and efficient.</p>
            </div>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out"   >
              <img src={report} className='width' alt='report' />
              <h2 className='card_heading mt-1'>Data Management Apps</h2>
              <p>Custom data management apps allow your business to run smoothly and report on important KPIs.</p>
            </div>
            <div className='col-sm-3 text-center shdow' data-aos="zoom-out"  >
              <img src={coding} className='width' alt='coding' />
              <h2 className='card_heading'>Development Partnerships</h2>
              <p>Your new on-shore development partner to efficiently support your day to day needs.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 
        <div className='row mt-4 text-center'>
        <div className='col-sm-12'  data-aos = "fade-right">
          <h3 className='great mt-3'>Our Comprehensive Software Solutions</h3>
          <p className='we_bel'>we believe that client satisfaction is key to our success, and we are committed to providing exceptional customer service at every stage of the software development process . Our team works closely with clients to ensure that their vision is realized, and their software solution is a success.</p>
        </div>
      </div>
      */}

    </>
  );
}

export default Home;
