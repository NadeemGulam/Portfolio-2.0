import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nadeem-gulam/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/NadeemGulam" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/nadeem-gulam/" target="_blank" rel="noreferrer"><FaYoutube/></a>
    </div> 
     
  )
}

export default HeaderSocials