import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { fetchSingleCharacter } from '@/utils'
import { CharacterProps } from "@/types";
import CustomButtom from './CustomButtom';
interface CharacterCardProps {
  character: CharacterProps;
}

const Details = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg mx-auto mt-8 max-w-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">{character.name}</h1>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <div className="w-32 h-32 relative rounded-full overflow-hidden">
          <img src={character.image} alt={`${character.name} image`} className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="text-lg font-semibold">Status: {character.status}</p>
          <p className="text-lg font-semibold">Species: {character.species}</p>
          <p className="text-lg font-semibold">Gender: {character.gender}</p>
          <p className="text-lg font-semibold">Type: {character.type}</p>
          <p className="text-lg font-semibold">Location: {character.location?.name}</p>
          <p className="text-lg font-semibold">Created: {character.created}</p>
        </div>
      </div>
      {/* Otras secciones de información, si es necesario */}
    </div>
  );
}

export default Details;
