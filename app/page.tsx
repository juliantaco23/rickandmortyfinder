import { Hero, CharacterCard } from '@/components'
import { fetchCharacters } from '@/utils'
import Link from 'next/link';

export default async function Home() {
  const allCharacters = await fetchCharacters();
  const isDataEmpty = !allCharacters || allCharacters.length < 1 || !Array.isArray(allCharacters);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width ' id='discover'>
        <div className='content-normal'>
          <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Characters Catalogue</h1>
            <p>Explore the characters you might like</p>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__characters-wrapper'>
              {allCharacters?.slice(0,12).map((character) => (
                <CharacterCard character={character} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Ooops, no results found
            </h2>
            <p>
              {allCharacters?.mesage}
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
