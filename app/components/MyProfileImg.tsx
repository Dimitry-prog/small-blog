import React from 'react';
import Image from "next/image";
import myImg from '../../public/images/me.jpg';

const MyProfileImg = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        src={myImg}
        priority
        alt="Hello this is my images"
        className="w-48 h-48 mt-8 mx-auto border-4 border-black drop-shadow-xl shadow-black rounded-full dark:border-slate-500"
      />
    </section>
  );
};

export default MyProfileImg;