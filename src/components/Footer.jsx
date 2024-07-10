import React from 'react'

import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="container-lg p-0 tw-flex tw-flex-row tw-justify-between tw-items-center">
        <h6 className='tw-font-serif m-0 user-select-none text-uppercase'>Martinez - Portfolio</h6>
        <div className='d-flex'>
            <a 
            href="mailto:nathanael.martinez.cics@ust.edu.ph" 
            className="tw-font-serif tw-no-underline tw-text-zinc-50 fw-medium me-4 d-flex align-items-center hover:tw-text-red-400 tw-transition-colors tw-ease-linear"
            >
                <MdEmail className="tw-text-2xl "/>
                <span className="d-none d-md-inline ms-md-3">nathanael.martinez.cics@ust.edu.ph</span>
            </a>
            <a
            href="tel:+639774572876" 
            className="tw-font-serif tw-no-underline tw-text-zinc-50 fw-medium d-flex align-items-center hover:tw-text-sky-400 tw-transition-colors tw-ease-linear"
            >
                <span><IoCall className="tw-text-2xl"/></span>
                <span className="d-none d-md-block ms-md-3">+63 9774572876</span>
            </a>
        </div>
    </section>
  )
}

export default Footer;