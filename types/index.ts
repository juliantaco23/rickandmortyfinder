import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button"|"submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchCharacterProps {
    character: string;
    setCharacter: (character: string) => void;
}

export interface CharacterProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}