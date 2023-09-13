'use client'

import { useState } from "react";
import Image from "next/image";
import { CharacterProps } from "@/types";
import CustomButtom from "./CustomButtom";

interface CharacterCardProps {
    character: CharacterProps;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Determina el src de la imagen basado en character.status
    const imageSrc =
    character.status === "Alive"
    ? "/alive.png" 
    : character.status === "Dead"
    ? "/dead.png" 
    : "/unknown.png";

    return (
        <div className="character-card group">
            <div className="character-card__content">
                <h2 className="character-card__content-title">
                    {character.species} {character.name}
                </h2>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative rounded-full">
                    <Image src={imageSrc} alt="Status Image" width={20} height={20} />
                </div>
                <p className="text-[22px] font-extrabold mt-0">
                    {character.status}
                </p>
            </div>


            <div className='relative rounded-full w-40 h-40 mx-auto my-3 object-contain'>
                <Image
                    src={character.image}
                    alt={`${character.name} image`}
                    fill priority className="object-contain rounded-full"
                />
            </div>

            <div className="relative flex w-full mt-2 mb-6">
                <div className="character-card__btn-container">
                    <CustomButtom
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
