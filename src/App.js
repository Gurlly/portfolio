import { React, useState, useEffect } from "react";
import { Element, Events, scrollSpy } from "react-scroll";

import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";

import { Accordion } from "react-bootstrap";

import { IoAddOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import Skills from "./data/skills.json";
import Projects from "./data/projects.json";

const sectionsData = [
  {
    name: "Intro",
    id: "intro",
    active: true,
  },
  {
    name: "About",
    id: "about",
    active: false,
  },
  {
    name: "Skills",
    id: "skill",
    active: false,
  },
  {
    name: "Projects",
    id: "project",
    active: false,
  },
  {
    name: "Contacts",
    id: "contact",
    active: false,
  },
];

function App() {
  const [mode, setMode] = useState(true); // true = light, false = dark
  const [section, setSection] = useState(sectionsData);
  const [noteColor, setNoteColor] = useState("tw-bg-violet-200");

  const changeSectionStatus = (id) => {
    setSection(
      section.map((section) =>
        section.id === id
          ? { ...section, active: true }
          : { ...section, active: false }
      )
    );
  };

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.remove("tw-dark");
    } else {
      document.documentElement.classList.add("tw-dark");
    }
  }, [mode]);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <header className="container-fluid sticky-top tw-p-4 lg:tw-px-0 tw-bg-stone-100 dark:tw-bg-stone-900 tw-shadow-lg">
        <NavBar
          mode={mode}
          setMode={setMode}
          sections={section}
          changeSectionStatus={changeSectionStatus}
        />
      </header>

      {/** Hero */}
      <Element
        name="intro"
        className="container-fluid tw-p-5 tw-py-72 md:tw-px-0 lg:tw-py-96 tw-h-96 tw-flex tw-items-center tw-justify-center lg:tw-justify-start tw-bg-gradient-to-r tw-from-neutral-50 tw-via-stone-100 tw-to-neutral-50"
      >
        <Hero sections={section} changeSectionStatus={changeSectionStatus} />
      </Element>

      <main className="container-fluid p-0">
        {/** About Me */}
        <Element
          name="about"
          className="container-fluid px-0 tw-py-28 md:tw-py-36 lg:tw-py-44 tw-bg-gradient-to-r tw-from-zinc-900 tw-via-zinc-950 tw-to-zinc-900"
        >
          <div className="container-lg d-flex flex-column">
            <div className="row tw-mb-20">
              <div className="col-12">
                <div className="tw-flex tw-justify-center">
                  <h2 className="tw-font-serif tw-uppercase tw-w-3/5 tw-max-w-80 tw-text-center tw-py-5 tw-text-xl md:tw-text-2xl xl:tw-text-3xl fw-semibold rounded-4 tw-bg-zinc-950 tw-text-zinc-50 tw-shadow-lg tw-shadow-zinc-400 hover:tw-shadow-zinc-50 border tw-transition-all tw-ease-linear tw-delay-100">
                    About me
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center order-lg-last mb-5 mb-lg-0 user-select-none">
              <div className="col-12 col-md-10">
                <div className="tw-text-stone-50 tw-border tw-px-4 tw-py-6 md:tw-px-6 md:tw-py-8 tw-rounded-lg tw-shadow-lg tw-shadow-zinc-400 hover:tw-shadow-xl hover:tw-shadow-zinc-50 tw-transition-all tw-ease-linear tw-delay-100">
                  <FadeIn>
                    <h3 className="tw-font-serif mb-4 fw-bold md:tw-text-3xl lg:tw-text-4xl xl:tw-text-5xl">
                      Hello, I am Nathanael Martinez!
                    </h3>

                    <p className="tw-font-sans tw-text-justify m-0 tw-text-lg md:tw-text-xl lg:tw-text-2xl xl:tw-text-3xl">
                      I am a Computer Science major specializing in Data Science
                      at the University of Santo Tomas, with a strong foundation
                      in software engineering, data structures and algorithms,
                      and full-stack development. My academic journey has been
                      complemented by hands-on experience building scalable web
                      applications, allowing me to develop proficiency in
                      technologies such as React, Node.js, MongoDB, and Tailwind
                      CSS.
                      <br />
                      <br />
                      Outside studies, I am committed to continuous learning and
                      staying current with emerging trends in technology. I
                      actively pursue certifications and self-directed projects
                      that deepen my understanding of modern development
                      practices and data-driven solutions.
                      <br />
                      <br />
                      While my professional experience is still growing, I have
                      successfully delivered freelance projects that simulate
                      real-world environments—ranging from appointment systems
                      to dashboard analytics—demonstrating my ability to adapt
                      quickly, collaborate effectively, and solve practical
                      challenges.
                      <br />
                      <br />I am eager to contribute to impactful projects,
                      apply my skills in dynamic settings, and grow as a
                      developer and data scientist. My goal is to bring value to
                      organizations through thoughtful engineering, data
                      insight, and a mindset rooted in lifelong learning.
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>

            <div className="row justify-content-center gy-4 gx-4 mb-lg-5 ">
              <div className="col-12 col-md-10 col-lg-5">
                <Accordion
                  className="tw-font-serif"
                  defaultActiveKey="0"
                  alwaysOpen
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="md:tw-text-lg xl:tw-text-xl">
                        Academic Background & Experience
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="md:tw-h-72 lg:tw-h-96">
                      <ul className="tw-list-outside tw-list-disc m-0 md:tw-text-lg xl:tw-text-xl">
                        <li>
                          Elementary and Junior Highschool Graduate{" "}
                          <abbr>(SHAP)</abbr>
                        </li>
                        <li>
                          Senior Highschool Graduate with Honors{" "}
                          <abbr>(UST)</abbr>
                        </li>
                        <li>
                          Enrolled in Computer Science Program{" "}
                          <abbr>(UST)</abbr>
                        </li>
                        <li>
                          Community Building Staff{" "}
                          <abbr>(UST - Teletigers)</abbr>
                        </li>
                        <li>
                          Community Building Staff{" "}
                          <abbr>(UST - Computer Science Society)</abbr>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-12 col-md-10 col-lg-5">
                <Accordion
                  className="tw-font-serif"
                  defaultActiveKey="0"
                  alwaysOpen
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="md:tw-text-lg xl:tw-text-xl">
                        Course Certifications
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="md:tw-h-72 lg:tw-h-96">
                      <ul className="tw-list-outside tw-list-disc m-0 md:tw-text-lg xl:tw-text-xl">
                        <li>
                          Complete Front-End Development Course (
                          <a
                            href="https://drive.google.com/file/d/16ro6XD0eKxH32NllbsBGqQUl-42EVCLK/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          JavaScript Eseentials 1 (
                          <a
                            href="https://drive.google.com/file/d/16IlOFdNDBq19K2EpznDDUPROq0N_gEfG/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          NextJS Web Development Course (
                          <a
                            href="https://drive.google.com/file/d/1-rAkd0P3IyrsGcyv-6kmKs7-aUBkQmlA/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          NodeJS (
                          <a
                            href="https://drive.google.com/file/d/1q9TlwCpCgex8M6qe9HArkkfJCMz0jrPR/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li className="tw-flex">
                          Bootstrap 5 & TailwindCSS (
                          <span className="tw-flex tw-gap-x-2">
                            <a
                              href="https://drive.google.com/file/d/15MPVO_-Yngcsy6_l1jRZEQuqTDxrG5Gu/view?usp=sharing"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Bootstrap
                            </a>
                            <a
                              href="https://drive.google.com/file/d/1gArfrinV_QUcXmKJrdittG9gYtshNgzE/view?usp=sharing"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Tailwind
                            </a>
                          </span>
                          )
                        </li>
                        <li>
                          GitHub Foundation (
                          <a
                            href="https://drive.google.com/file/d/1R9P9xxuITjSpgxXobnWLmgXHMwmvjBRW/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          MySQL Basics (
                          <a
                            href="https://drive.google.com/file/d/1NbPlfHSbKVFrfeYKZVnxfTEmfcO3mlCg/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                        <li>
                          Others (
                          <a
                            href="https://drive.google.com/drive/folders/1OrLyaSypWjFBP9s-v5hiB-zH-w5kuWF_?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Link
                          </a>
                          )
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </Element>
        {/** Skills */}
        <Element
          name="skill"
          className="container-fluid px-0 tw-py-28 md:tw-py-36 lg:tw-py-44 tw-bg-gradient-to-r tw-from-neutral-50 tw-via-stone-100 tw-to-neutral-50"
        >
          <div className="container-lg">
            <div className="row tw-mb-20">
              <div className="col-12">
                <div className="tw-flex tw-justify-center">
                  <h2 className="tw-font-serif tw-uppercase tw-w-3/5 tw-max-w-72 tw-text-center tw-py-4 tw-text-xl md:tw-text-2xl xl:tw-text-3xl fw-semibold rounded-4 tw-outline-double tw-outline-8 tw-outline-zinc-800 hover:tw-scale-105 tw-transition-transform tw-duration-150 tw-ease-linear">
                    Skills
                  </h2>
                </div>
              </div>
            </div>

            <div className="row gy-5 md:tw-gap-x-8 xl:tw-gap-x-16 justify-content-center">
              <div className="col-11 col-md-10 col-lg-5 tw-px-3 md:tw-px-5 tw-py-5 md:tw-py-7 tw-border-2 tw-border-black tw-rounded-lg tw-shadow-md">
                <FadeIn>
                  <h4 className="tw-font-serif mb-4">Front-End Skills:</h4>

                  <div>
                    {Skills.map((skill) =>
                      skill.id <= 6 ? (
                        <div
                          key={skill.id}
                          className={`${skill.id === 6 ? "" : "mb-3"}`}
                        >
                          <h6 className="tw-font-sans fs-5 fw-semibold">
                            {skill.name}:
                          </h6>
                          <div
                            className="progress tw-outline tw-outline-2"
                            role="progressbar"
                            aria-label="Skill Progress Bar"
                            aria-valuenow={skill.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar tw-bg-sky-600 hover:tw-bg-sky-500 tw-transition-colors tw-ease-in tw-delay-75"
                              style={{ width: `${skill.progress}%` }}
                            >
                              <p className="m-0 fw-medium">{skill.progress}%</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </FadeIn>
              </div>
              <div className="col-11 col-md-10 col-lg-5 tw-px-3 md:tw-px-5 tw-py-5 md:tw-py-7 tw-border-2 tw-border-black tw-rounded-lg tw-shadow-md">
                <FadeIn>
                  <h4 className="mb-4 tw-font-serif">Back-End Skills:</h4>
                  <div>
                    {Skills.map((skill) =>
                      skill.id > 6 ? (
                        <div
                          key={skill.id}
                          className={`${skill.id === 12 ? "" : "mb-3"}`}
                        >
                          <h6 className="tw-font-sans fs-5 fw-semibold">
                            {skill.name}:
                          </h6>
                          <div
                            className="progress tw-outline tw-outline-2"
                            role="progressbar"
                            aria-label="Skill Progress Bar"
                            aria-valuenow={skill.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar tw-bg-sky-600 hover:tw-bg-sky-500 tw-transition-colors tw-ease-in tw-delay-75"
                              style={{ width: `${skill.progress}%` }}
                            >
                              <p className="m-0 fw-medium">{skill.progress}%</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Element>

        {/** Projects */}
        <Element
          name="project"
          className="container-fluid px-0 tw-py-28 md:tw-py-36 lg:tw-py-44 tw-bg-gradient-to-r tw-from-zinc-900 tw-via-zinc-950 tw-to-zinc-900"
        >
          <div className="container-lg">
            <div className="row tw-mb-20">
              <div className="col-12">
                <div className="tw-flex tw-justify-center">
                  <h2 className="tw-font-serif tw-uppercase tw-w-3/5 tw-max-w-80 tw-text-center tw-py-5 tw-text-xl md:tw-text-2xl xl:tw-text-3xl fw-semibold rounded-4 tw-bg-zinc-950 tw-text-zinc-50 tw-shadow-lg tw-shadow-zinc-400 hover:tw-shadow-zinc-50 border tw-transition-all tw-ease-linear tw-delay-100">
                    Projects
                  </h2>
                </div>
              </div>
            </div>

            <div className="row px-3 gy-4 gx-5 justify-content-center justify-content-xl-evenly">
              {Projects.map((project) => (
                <div
                  key={project.id}
                  className="col-11 col-sm-7 col-md-6 col-lg-5"
                >
                  <div className="tw-border-4 tw-border-zinc-100 tw-rounded-lg">
                    <div className="tw-w-full tw-h-52 tw-overflow-hidden tw-border-b-2 tw-border-neutral-800">
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="tw-w-full tw-h-full tw-object-cover tw-object-center"
                      />
                    </div>
                    <div className="tw-h-72 p-2 d-flex flex-column justify-content-between tw-bg-zinc-50">
                      <div>
                        <h4 className="tw-font-serif">
                          <a
                            href={project["deploy-link"]}
                            target="_blank"
                            rel="noreferrer"
                            className="tw-text-neutral-800 tw-tw-underline hover:tw-text-blue-500 tw-transition tw-ease-linear"
                          >
                            {project.name}
                          </a>
                        </h4>
                        <p className="tw-text-justify tw-font-mono">
                          {project.description}
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        {project.repository === "" ? (
                          <></>
                        ) : (
                          <a
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer"
                            className="tw-border tw-w-4/12 py-2 me-3 tw-rounded-lg tw-text-zinc-100 tw-border-neutral-800 tw-bg-gray-700 hover:tw-bg-gray-600 tw-transition-colors tw-ease-linear"
                          >
                            <FaGithub className="mx-auto fs-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>

        {/** Contacts */}
        <Element
          name="contact"
          className="container-fluid px-0 tw-py-28 md:tw-py-36 lg:tw-py-44 tw-bg-gradient-to-r tw-from-neutral-50 tw-via-stone-100 tw-to-neutral-50"
        >
          <div className="container-lg">
            <div className="row tw-mb-12">
              <div className="col-12 tw-px-5 lg:tw-px-0">
                <div className="tw-flex tw-justify-center">
                  <h2 className="tw-font-serif tw-uppercase tw-w-4/5 tw-rounded-md tw-max-w-72 tw-text-center tw-py-4 tw-text-xl md:tw-text-2xl xl:tw-text-3xl fw-semibold tw-border-2 tw-border-neutral-900 tw-bg-yellow-200">
                    Contact Me
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-xl-7 tw-px-5 lg:tw-px-0">
                <div
                  className={`tw-border tw-border-zinc-900 tw-rounded-md ${noteColor}`}
                >
                  <div className="d-flex align-items-center justify-content-between tw-bg-zinc-800">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="tw-font-sans tw-text-2xl lg:tw-text-3xl p-1 hover:tw-bg-zinc-700 tw-text-zinc-50"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IoAddOutline />
                      </button>
                      <ul className="tw-font-serif dropdown-menu py-0">
                        <li>
                          <a
                            className="dropdown-item hover:tw-bg-blue-500 hover:tw-text-zinc-50 py-2 tw-rounded-t-md tw-transition-colors tw-ease-linear"
                            href="https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </li>
                        <li>
                          <hr className="my-0" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item hover:tw-bg-gray-600 hover:tw-text-zinc-50 py-2 tw-transition-colors tw-ease-linear"
                            href="https://github.com/Gurlly"
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        </li>
                        <li>
                          <hr className="my-0" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item hover:tw-bg-green-500 hover:tw-text-zinc-50 py-2 tw-rounded-b-md tw-transition-colors tw-ease-linear"
                            href="https://www.fiverr.com/users/gurlly123/seller_dashboard"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Fiverr
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="d-flex align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="tw-font-sans tw-text-2xl lg:tw-text-3xl p-1 hover:tw-bg-zinc-700 tw-text-zinc-50"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <HiOutlineDotsHorizontal />
                        </button>
                        <ul className="tw-font-serif dropdown-menu py-0">
                          <li>
                            <button
                              className="dropdown-item hover:tw-bg-violet-200 py-2 tw-rounded-t-md tw-transition-colors tw-ease-linear"
                              type="button"
                              onClick={() => setNoteColor("tw-bg-violet-200")}
                            >
                              Purple
                            </button>
                          </li>
                          <li>
                            <hr className="my-0" />
                          </li>
                          <li>
                            <button
                              className="dropdown-item hover:tw-bg-sky-200 py-2 tw-transition-colors tw-ease-linear"
                              type="button"
                              onClick={() => setNoteColor("tw-bg-sky-200")}
                            >
                              Blue
                            </button>
                          </li>
                          <li>
                            <hr className="my-0" />
                          </li>
                          <li>
                            <button
                              className="dropdown-item hover:tw-bg-emerald-200 py-2 tw-transition-colors tw-ease-linear"
                              type="button"
                              onClick={() => setNoteColor("tw-bg-emerald-200")}
                            >
                              Green
                            </button>
                          </li>
                          <li>
                            <hr className="my-0" />
                          </li>
                          <li>
                            <button
                              className="dropdown-item hover:tw-bg-pink-200 py-2 tw-rounded-b-md tw-transition-colors tw-ease-linear"
                              type="button"
                              onClick={() => setNoteColor("tw-bg-pink-200")}
                            >
                              Pink
                            </button>
                          </li>
                        </ul>
                      </div>

                      <button
                        type="button"
                        className="tw-text-2xl lg:tw-text-3xl p-1 hover:tw-bg-zinc-700 tw-text-zinc-50"
                      >
                        <IoClose />
                      </button>
                    </div>
                  </div>
                  <FadeIn>
                    <p className="tw-font-mono tw-text-justify tw-break-words m-0 p-3 p-lg-4 tw-text-lg md:tw-text-xl lg:tw-text-2xl">
                      Thank you for visiting my portfolio. If you have any
                      questions, would like to discuss a project, or simply want
                      to connect, I'd love to hear from you.
                      <br />
                      <br />
                      Feel free to email me at{" "}
                      <a href="mailto:nathanael.martinez.cics@ust.edu.ph">
                        nathanael.martinez.cics@ust.edu.ph
                      </a>{" "}
                      or call me at{" "}
                      <a href="tel:+639774572876">0977-457-2876</a>. I'm
                      available any time of the day and will do my best to
                      respond promptly to your inquiries.
                      <br />
                      <br />
                      Additionally, you can connect with me on{" "}
                      <a
                        href="https://www.linkedin.com/in/nathanael-martinez-1ab5b2280/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>{" "}
                      for professional networking and updates on my latest
                      projects.
                      <br />
                      <br />
                      Looking forward to hearing from you and potentially
                      working together!
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </main>

      <footer className="container-fluid tw-px-4 tw-py-5 lg:tw-py-6 lg:tw-px-0 tw-bg-stone-900 tw-text-zinc-50 dark:tw-bg-stone-100 tw-shadow-lg">
        <Footer />
      </footer>
    </>
  );
}

export default App;
