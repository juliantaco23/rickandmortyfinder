"use client";

import { useState, Fragment} from 'react'; 
import { SearchCharacterProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import React from 'react'
import Image from 'next/image';

const SearchCharacter = ({ character, setCharacter}:SearchCharacterProps) => {

  const [ query, setQuery ] = useState('') 
  return (
    <div className='search-character'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image 
                        src="/morty-smith.svg"
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='Morty Logo' />
                </Combobox.Button>

                <Combobox.Input
                    className="search-character__input"
                    placeholder='Rick'
                    displayValue={(character: string) => 
                    character}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <Transition
                    as = {Fragment}
                    leave = 'transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}
                >
                    <Combobox.Options> </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchCharacter