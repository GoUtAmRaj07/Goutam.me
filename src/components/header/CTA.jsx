import React from 'react'
// import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        {/* <a href={CV} download className='btn'>Download CV</a> */}
        <a href="https://drive.google.com/file/d/1-fjVDAehz1rUaeI3-CdC6Fac4FDxW2h_/view?usp=sharing" download className='btn' target="_blank">View CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
