import React from 'react'
import './services.css'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { GiLaddersPlatform } from 'react-icons/gi'

const services = () => {
  return (
    <section id="services">
      <h5>Details about</h5>
      <h2>Certificates and Coding Platforms</h2>


<div className="container service__container">
        <div className="service__certificate">
          <h3>Certificates I Have</h3>
          <small class = "text-light" textAlign="center">Click checkBox to check it out</small>
          <div className="service__content">
          {/* <small class = "text-light" textAlign="center">Click checkBox to check it out</small> */}

            <article className="service__details">
              <a href="https://drive.google.com/file/d/1NSd4xApjIuY5h2rsPnyI1Sy3FWhKgf75/view?usp=sharing" target="_blank"><BsFillBookmarkCheckFill/></a>
              <div>
                <h4>Intermediate Problem Solving HackerRank</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="service__details">
              <a href="https://drive.google.com/file/d/1oVvQRiCVeEzpMrDfYrd3NXn5SpG55i5h/view?usp=sharing" target="_blank"><BsFillBookmarkCheckFill/></a>
              <div>
                <h4>Basic Problem Solving HackerRank</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="service__details">
              <a href="https://drive.google.com/file/d/1-MJDLQDff-3S_5kP5KOFTTzHVtZNwx9W/view?usp=sharing" target="_blank"><BsFillBookmarkCheckFill/></a>
              <div>
                <h4>JAVA</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="service__details">
              <a href="https://drive.google.com/file/d/1-FP-mzpGav43OsndqVglDD2JQG5IMh2j/view?usp=sharing" target="_blank"><BsFillBookmarkCheckFill/></a>
              <div>
                <h4>Python</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>

            <article className="service__details">
              <a href="https://drive.google.com/file/d/1-JI5XMKdVT-zd_XE53fvkDbCfaxiIKAO/view?usp=sharing" target="_blank"><BsFillBookmarkCheckFill/></a>
              <div>
                <h4>MySQL</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            
          </div>

        </div>
        
        <div className="service__platforms">
          <h3>Platforms for problem Solving</h3>
          <div className="service__content">
            <article className="service__details">
              <GiLaddersPlatform />
              <div>
                <h4>LeetCode</h4>
                <a href="https://leetcode.com/Nai_Bataunga/" target="_blank">checkout</a>
              </div>
            </article>

            <article className="service__details">
              <GiLaddersPlatform />
              <div>
                <h4>HackerRank</h4>
                <a href="https://www.hackerrank.com/h1905318" target="_blank">checkout</a>
              </div>
            </article>

            <article className="service__details">
              <GiLaddersPlatform />
              <div>
                <h4>GeeksForGeeks</h4>
                <a href="https://auth.geeksforgeeks.org/user/1905318/practice/" target="_blank">checkout</a>
              </div>
            </article>

          </div>

        </div>
      </div>
      
    </section>
  )
}

export default services