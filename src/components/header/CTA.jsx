import React from 'react'
// import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href="https://drive.google.com/file/d/1-fWprQrge7scXxbx4fQIfS04VgAEIBTa/view?usp=sharing" download className='btn' target="_blank">View CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA