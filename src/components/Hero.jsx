import React from 'react'

function Hero() {
  return (
    <div className='bg-gray-100 pb-9 grid grid-cols-1 lg:grid-cols-2'>
        <div className='pt-14 pl-3 md:pl-8 md:pt-44'>
           <p className='text-[23px] font-mono font-semibold'>Hey, I'm Zain</p>
           <h1 className='text-[25px] md:text-[40px] font-mono font-semibold'>Frontend Web Developer</h1>
<p className='text-[17px] md:text-[23px] font-medium py-4'>1 year of experience in Frontend web development </p>
<button className='border-[#5E3bee] hover:bg-[#ffffff]
 hover:text-[#5E3bee]  text-[#ffffff] bg-[#5E3bee] border px-3 py-2 rounded-lg '>
      Connect Me
    </button>
        </div>
        <div>
            <img src='https://my-awesome-react-project.netlify.app/img/hero_img.png'
            alt='' />
        </div>
    </div>
  )
}

export default Hero