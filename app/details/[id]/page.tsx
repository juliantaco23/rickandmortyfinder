import React from 'react'

const CharacterDetails = ({ params }: { params: { id: number } }) => {
  return (
    <div>{params.id}</div>
  )
}

export default CharacterDetails