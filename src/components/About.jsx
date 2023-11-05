import React from 'react'

function About() {
  return (
    <div className='lg:flex mx-24 my-12 justify-between '>
        <div>
           <img
          className='max-w-[500px]'  src='https://my-awesome-react-project.netlify.app/img/about-me.png' alt='' />
        </div>
        <div className='px-12 py-8'>
        <p className='text-[23px] font-medium'>My Skills</p>
      <h1 className='text-[54px] font-bold'>My Expertise</h1>  
      <p className='text-[23px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam tempora numquam sint odit optio.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae</p>
            </div>
    </div>
  )
}

export default About