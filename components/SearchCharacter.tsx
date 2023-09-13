"use client";

import { useState, Fragment} from 'react'; 
import { SearchCharacterProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { characters } from '@/constants';
import React from 'react'
import Image from 'next/image';

const SearchCharacter = ({ character, setCharacter}:SearchCharacterProps) => {

  const [ query, setQuery ] = useState('');

  const filteredCharacters = 
    query === ""
        ? characters 
        : characters.filter((character) => (
            character.toLowerCase().replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')
        )))
  return (
    <div className='search-characters'>
        <Combobox value={character} onChange={setCharacter}>
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
                    className="search-characters__input"
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
                    <Combobox.Options> 
                        {filteredCharacters.length === 0 
                        && query !== "" 
                        ? (
                            <Combobox.Option 
                                value={query}
                                className="search-characters__option"
                            >
                                Search "{query}"
                            </Combobox.Option>
                        ): (
                            filteredCharacters.map((character) => (
                                <Combobox.Option
                                    key={character}
                                    
                                    className={( {active}) => `
                                    relative search-characters__option
                                    ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                    `}

                                    value={character}
                                >
                                    {({ selected, active }) => (
                                        <>
                                        <span
                                          className={`block truncate ${
                                            selected ? 'font-medium' : 'font-normal'
                                          }`}
                                        >
                                          {character}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active ? 'text-white' : 'text-teal-600'
                                            }`}
                                          >
                                          </span>
                                        ) : null}
                                      </>
                                              
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                    </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchCharacter