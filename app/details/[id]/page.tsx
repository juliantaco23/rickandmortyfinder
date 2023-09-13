import React from 'react'
import { CharacterDetails } from '@/components'
import { fetchSingleCharacter } from '@/utils'


export default async function Details({ params }: { params: { id: number } }) {
  const character = await fetchSingleCharacter(params.id);
  return (
    <CharacterDetails character={character}></CharacterDetails>
  )
}
