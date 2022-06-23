import React from 'react'
import './about.css'
import ME from '../../assets/profile-pic.jpeg'
import {BiAward} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {BiHappyBeaming} from 'react-icons/bi'

const about = () => {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src = {ME} className="about__me-image"/>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon"/>
              <h5>5 <AiFillStar/></h5>
              <small>Problem Solving  HackerRank</small>
            </article>

            <article className="about__card">
              <BiAward className="about__icon"/>
              <h5>5 <AiFillStar/></h5>
              <small>Python HackerRank</small>
            </article>

            <article className="about__card">
              <BiAward className="about__icon"/>
              <h5>2 <AiFillStar/></h5>
              <small>LeetCode</small>
            </article>
          </div>

          <p>A self Motivated responsible and hard working guy(3rd year Undergraduate). Love to solve problems and Adaptable to challenging situations. Can work with a team and also use my own initiative in order to complete the task in hand. Passionate about Data Science, Software Development and Cyber Security. Love to explore new technologies and think of how it can be used in various fields. Ready to gain  new skills and deep dive into the ocean of Tech World.<br/>
          (PS : Not a very social guy but trying to become one <BiHappyBeaming/><BiHappyBeaming/>)</p>

          <a href= "#contact" className = "btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about