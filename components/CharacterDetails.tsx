import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { fetchSingleCharacter } from '@/utils'
import { CharacterProps } from "@/types";
interface CharacterCardProps {
  character: CharacterProps;
}


const Details = ({ character }: CharacterCardProps) => {

    const  detail  = character; 
    return (
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">{detail.name}</h1>
          <Link href="/app">
            Go back to Character Card
          </Link>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <div className="w-20 h-20 relative rounded-full">
            <Image src={detail.image} alt={`${detail.name} image`} width={80} height={80} />
          </div>
          <div>
            <p className="text-lg font-semibold">{detail.status}</p>
            <p className="text-gray-600">{detail.species}</p>
            <p className="text-gray-600">{detail.gender}</p>
          </div>
        </div>
        {/* Otras secciones de información, si es necesario */}
      </div>
    );
  }
  

  export default Details;
