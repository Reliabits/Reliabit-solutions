import React from 'react'
import Logo from '../../assets/logt.png'
import './footer.css'
import {FaSquareFacebook ,FaLinkedin   } from "react-icons/fa6";
import { FaInstagramSquare ,FaTwitterSquare  } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Footer() {
    const handleClick = () => {
        window.location.replace('https://www.upwork.com/freelancers/~01c15ba9a92aa84ae3');
      };
    return (
        <>
            <div className=' bg-body-tertiary px-0'>
                <div className='container'>
                    <div className='row px-0'>
                        <div className='col-sm-4 col-xs-12 center_logo'>
                            <img src={Logo} className='footer_logo' />
                        </div>
                        <div className='col-sm-4 col-xs-12'>
                            <p className='margin_top'>&copy; 2023 Reliabit-solutions All right reserved </p>
                        </div>
                        <div className='col-sm-4 c0l-xs-12 text-icons'>
                        <FaInstagramSquare className='margin_top_color'/>
                        <FaTwitterSquare className='margin_top_color pr-4 mr-4'/>
                        <FaSquareFacebook className='margin_top_color pr-4 mr-4'/>
                        <FaLinkedin className='margin_top_color pr-4 mr-4'/>
                        <SiUpwork onClick={handleClick} className='margin_top_color pr-4 mr-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer