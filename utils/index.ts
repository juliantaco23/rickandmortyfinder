export async function fetchCharacters() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character", {
          method: 'GET',
          headers: {}
        });
      
        if (response.ok) {
          const result = await response.json();
          return result['results'];
        }
    } catch (err) {
        throw (err);
    }
}

export async function fetchSingleCharacter(params: number) {
  try {
    const url = `https://rickandmortyapi.com/api/character/${params}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {}
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    throw (err);
  }
}


