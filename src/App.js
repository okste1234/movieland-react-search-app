import { useState, useEffect } from 'react'
import "./App.css"
import SearchIcon from "./searchIcon.svg"
import MovieDisplayCards from './components/MovieDisplayCards'
import { movieOptions, API_URL } from './utils/movieOptions'
import Footer from './components/Footer'

// const API_URL = "http://www.omdbapi.com/?apikey=85b65705";




const App = () => {
  const [movies, setmovies] = useState([])
  const [search, setsearch] = useState("")

  const MovieSearch = async (title) => {
    const res = await fetch(`${API_URL}/auto-complete?q=${title}`, movieOptions)
    const data = await res.json()
    // console.log(data.d);
    setmovies(data.d)
    setsearch("")

  }



  // const MovieSearch = async (title) => {
  //     const res = await fetch(`${API_URL}&s=${title}`)
  //     const data = await res.json()

  //     setmovies(data.Search)
  //     setsearch("")

  // }

  const handleClick = () => {
    MovieSearch(search)
  }

  useEffect(() => {
    MovieSearch("Shrek")
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
          placeholder="Search for your movie"
        />
        <img
          src={SearchIcon}
          alt="click to search"
          onClick={handleClick}
        />
      </div>
      {
        movies.length > 0
          ? (
            <div className='container'>
              {
                movies.map(movie =>
                  <MovieDisplayCards movie={movie} />
                )
              }
            </div>
          ) : (
            <div className="empty">
              <h2>No movie with the Title</h2>
            </div>
          )

      }

      <Footer />

    </div>
  )
}

export default App
