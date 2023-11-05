import React from 'react'

function Header() {
  return (
    <div className='flex items-center
     text-[#1c1e53] justify-between px-2 py-6 border-b bg-[#ffffff] shadow-md md:px-6 lg:px-12'>
<div>
    <img src='https://my-awesome-react-project.netlify.app/img/logo.svg'
     alt='logo' />

</div>
<div className='hidden lg:flex'>
    <ul className='flex items-center space-x-4'>
        <li className='head-li'>Home</li>
        <li className='head-li'>Portfolio</li>
        <li className='head-li'>About Me</li>
        <li className='head-li'>Testimonials</li>

    </ul>
</div>
<div>
    <button className='border-[#5E3bee] hover:bg-[#5E3bee] hover:text-[#ffffff] text-[#5E3bee] border px-3 py-2 rounded-lg '>
      Connect Me
    </button>
</div>
    </div>
  )
}

export default Header