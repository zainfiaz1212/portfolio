import React from 'react';

const expertise = [
  {
    id: 1,
    image: 'https://my-awesome-react-project.netlify.app/img/product-chain-1.png',
    title: 'React Js',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
  },
  {
    id: 2,
    image: 'https://my-awesome-react-project.netlify.app/img/tag-1.png',
    title: 'Next Js',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
  },
  {
    id: 3,
    image: 'https://my-awesome-react-project.netlify.app/img/feather-pen-2.png',
    title: 'Html',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
  },
  {
    id: 4,
    image: 'https://my-awesome-react-project.netlify.app/img/feather-pen-1.png',
    title: 'JavaScript',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique',
  },
];

function Expertise() {
  return (
    <div className='text-[#282938] py-24 px-12'>
      <p className='text-[23px]'>My Skills</p>
      <h1 className='text-[54px] font-bold'>My Expertise</h1>
      <div className='grid mt-7 
       md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-7 '>
        {expertise.map((item) => (
          <div key={item.id} className='bg-[#f5fcff]
          cursor-pointer rounded-xl hover:border-b-sky-300 hover:border-b-[6px] px-3 py-9 flex flex-col 
           space-y-5'>
            <img className='h-[60px] w-[70px] bg-[#ffffff] p-2' src={item.image} alt='logo' />
            <p className='text-[23px] font-bold'>{item.title}</p>
            <span className='text-[17px] '>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
