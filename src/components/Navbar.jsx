import { React } from "react";
import { Link } from 'react-scroll';

import DarkLogo from "../resources/DarkLogo.png";
import LightLogo from "../resources/WhiteLogo.png";

// Icons
import { CgMenu } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const NavBar = ({ mode, setMode, sections, changeSectionStatus }) => {

    return (
        <div className="container-lg p-0 tw-flex tw-flex-row tw-justify-between tw-items-center">
            <Link 
            className="tw-cursor-pointer"
            to={"intro"}
            spy={true}
            smooth={true}
            duration={300}
            onClick={() => changeSectionStatus('intro')}
            >
                <img src={mode ? DarkLogo : LightLogo} alt="My portfolio logo" className="tw-w-10 tw-h-10" />
            </Link>
            <button 
            className="tw-p-2 tw-rounded-2xl dark:tw-text-zinc-200 hover:tw-bg-neutral-300 dark:hover:tw-bg-neutral-600 tw-transition tw-ease-in tw-delay-75 md:tw-hidden"
            type="button" data-bs-toggle="offcanvas" data-bs-target="#navOffCanvas" aria-controls="navOffCanvas"
            >
                <CgMenu className="tw-text-2xl"/>
            </button>
            <ul className="tw-hidden tw-mb-0 md:tw-flex">
                {sections.map(section => (
                    <li key={section.id} className={section.id === "contact" ? "" : "tw-mr-9"}>                      
                        <Link 
                            to={section.id}
                            spy={true}
                            smooth={true}
                            duration={300}
                            className={`tw-font-serif fs-5 list-group-item list-group-item-action tw-cursor-pointer border-0 ${section.active ? "tw-font-bold" : "tw-font-medium "} hover:tw-font-bold`}
                            onClick={() => {changeSectionStatus(section.id); console.log(sections)}}
                            onSetActive={() => changeSectionStatus(section.id)}
                        >
                            {section.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/** Off Canvas */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="navOffCanvas" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header justify-content-between tw-bg-stone-100 dark:tw-bg-stone-900 tw-border-b-2 tw-border-neutral-600 tw-border-opacity-30">
                    <img src={mode ? DarkLogo : LightLogo} alt="My portfolio logo" className="tw-w-9 tw-h-9" />
                    <button 
                    className="tw-text-3xl tw-rounded-2xl tw-p-1 dark:tw-text-zinc-200 hover:tw-bg-neutral-300 dark:hover:tw-bg-neutral-600 tw-transition tw-ease-in tw-delay-75"
                    type="button" 
                    data-bs-dismiss="offcanvas" 
                    aria-label="Close">
                        <IoClose />
                    </button>
                </div>

                <div className="offcanvas-body p-0 pb-3 tw-flex tw-flex-col tw-bg-stone-50 tw-justify-between">
                    <div className="list-group rounded-0">
                        {
                            sections.map(section => (
                                <Link 
                                    to={section.id}
                                    key={section.id}
                                    spy={true}
                                    smooth={true}
                                    duration={300}
                                    className={`tw-font-serif fs-5 list-group-item list-group-item-action tw-text-gray-900 border-0 ${section.active ? "tw-font-bold" : "tw-font-medium"} tw-bg-stone-50 hover:tw-bg-stone-200 hover:tw-font-bold`}
                                    onClick={() => {changeSectionStatus(section.id); console.log(sections)}}
                                    onSetActive={() => changeSectionStatus(section.id)}
                                >
                                    {section.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="tw-px-4">
                        <button 
                        className="tw-text-xl tw-text-neutral-50 tw-border tw-p-2 tw-rounded-xl tw-border-neutral-500 tw-bg-neutral-900 hover:tw-bg-neutral-800"
                        onClick={() => setMode(!mode)}
                        >
                            {mode ? <FaMoon /> : <IoMdSunny />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
