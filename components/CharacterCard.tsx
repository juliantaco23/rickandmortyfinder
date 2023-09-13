'use client'

import { useState } from "react"
import Image from "next/image"
import { CharacterProps } from "@/types"
import  CustomButtom  from "./CustomButtom"
interface CharacterCardProps {
    character: CharacterProps
}
const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="character-card group">
        <div className="character-card__content">
            <h2 className="character-card__content-title">
                {character.species} {character.name}
            </h2>
        </div>

        <p className="flex mt-6 text-[26px] font-extrabold">
            {character.status}
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
            <Image
            src={character.image} 
            alt={`${character.name} image`} 
            fill
            priority
            className="object-contain"
            />
        </div>
    </div>
  )
}

export default CharacterCard