import React from 'react';
import { IExploreData } from '../types';
import Image from 'next/image';

interface ISmallCardProps extends IExploreData {
  key: string;
}

function SmallCard({ img, location, distance }: ISmallCardProps) {
  return (
    <div
      className="flex items-center mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105
                    transition transform duration-200 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
