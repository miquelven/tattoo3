import React, { useEffect, useState } from 'react';
import axios from "axios";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Testimonial = () => {

  const url = "https://json-server-kq40.onrender.com/funcionarios/1"

  const [funcionarios, SetFuncionarios] = useState('');

  useEffect(() => {
    axios.get(url).then((response) => {
      SetFuncionarios(response.data);
    });
  }, []);

  const link = "https://json-server-kq40.onrender.com/funcionarios/2"

  const [funcionarios1, SetFuncionarios1] = useState('');

  useEffect(() => {
    axios.get(link).then((response) => {
      SetFuncionarios1(response.data);
    });
  }, []);

  const link1 = "https://json-server-kq40.onrender.com/funcionarios/3"

  const [funcionarios2, SetFuncionarios2] = useState('');

  useEffect(() => {
    axios.get(link1).then((response) => {
      SetFuncionarios2(response.data);
    });
  }, []);


  return (
    <>
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='pb-[40px] pt-[40px] lg:pb-[160px] lg:pt-0'
    >
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl  text-center">
        Nossos Artistas
      </h2>
    <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-2 py-6 sm:px-6 sm:py-24 lg:px-8">
    <div
      className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3"
    >
      <div>
        <img
          alt="Woman"
          src={funcionarios.url}
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p className="text-lg font-bold text-gray-700">{funcionarios.nome}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            {funcionarios.cargo}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            {funcionarios.descrição}
          </p> 
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src={funcionarios1.url}
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p className="text-lg font-bold text-gray-700">{funcionarios1.nome}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            {funcionarios1.cargo}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            {funcionarios1.descrição} 
          </p>
        </blockquote>
      </div>

      <div>
        <img
          alt="Woman"
          src={funcionarios2.url}
          className="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
        />

        <blockquote
          className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
        >
          <p className="text-lg font-bold text-gray-700">{funcionarios2.nome}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">
            {funcionarios2.cargo}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            {funcionarios2.descrição}
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</section>
</motion.section>
</>
  );
};

export default Testimonial;
