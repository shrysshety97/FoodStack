import React from 'react'
import chef1 from '../assets/chef1.png';
import chef2 from '../assets/chef2.png';
import chef3 from '../assets/chef3.png';

const Chefs = () => {
  return (
    <div>
      <section className=''>
      <div className='max-w-[622px] pb-20 mx-auto text-center'>
        <h3 className='h3 uppercase'>
           Our Culinary Artisans
        </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        gravida neque nisi, et ornare magna pellentesque sed.</p>
        </div>

        <div className='max-padd-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10'>
            <div>
                <img src={chef1} alt="" className='object-conatin aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
            </div>
            <div className='mt-14'>
                <img src={chef2} alt="" className='object-conatin aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
            </div>
            <div className='mt-28'>
                <img src={chef3} alt="" className='object-conatin aspect-square bg-white pt-5 h-[499px] rounded-xl'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Chefs
