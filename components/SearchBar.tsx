'use client'


import { useState } from "react"
import SearchCharacter from "./SearchCharacter"

const SearchBar = () => {

    const [character, setCharacter] = useState('')
    const handleSearch = () => {}
    return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchCharacter 
                character={character}
                setCharacter={setCharacter}
            />
        </div>
    </form>
  )
}

export default SearchBar