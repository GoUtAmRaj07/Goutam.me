import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/goutam-raj-9104721b6/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/GoUtAmRaj07" target="_blank"><FaGithubAlt/></a>
        <a href="https://www.instagram.com/goutam_raj_7/?hl=en" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials