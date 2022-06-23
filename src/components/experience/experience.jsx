import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>I Have</h2>

      <div className="container experience__container">
        <div className="experience__coding">


          <h3>Coding Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Problem Solving</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Data Structures and Algorithms</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Basic-Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>


        </div>
        <div className="experience__frontend">


          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>


            </article>
          </div>

        </div>




        <div className="experience__extras">


          <h3>Extras</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Operating System</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>DBMS</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Network Security</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Data Analysis</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Machine Learning</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Git and GitHub</h4>
                <small className="text-light"></small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}

export default experience