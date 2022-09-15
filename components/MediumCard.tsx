import Image from 'next/image';
import React from 'react';

interface IMediumCardProps {
  img: string;
  title: string;
}

function MediumCard({ img, title }: IMediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image layout="fill" src={img} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
