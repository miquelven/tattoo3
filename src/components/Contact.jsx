import React from 'react';
// import contact data
import { contactData } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';

const Contact = () => {
  // destructure contact data
  const { title, info, form } = contactData;
  return (
    <section className='section' id="contato">
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px]'>{title}</h2>
          </motion.div>
          {/* form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-center '
          >
            <form className='flex flex-col gap-y-10 w-full'>
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={form.name}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                type='text'
                placeholder={form.email}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 xl:mb-[30px]'
                type='text'
                placeholder={form.message}
              />
              <button className='self-start btn btn-sm btn-dark'>
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
