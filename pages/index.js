import useFetchPokemon from "../useRequest"
import Pokemon from "../components/Pokemon"

export default function IndexPage() {
  const { result, error } = useFetchPokemon()

  if (error) return <h1>Uh oh...</h1>
  if (!result) return <h1>Loading...</h1>

  return (
      <main className='App'>
        <h1>NextDex</h1>
        <div>
          {result.results.map((pokemon) => (
              <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </main>
  )
}