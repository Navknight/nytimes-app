import React, {useState, useEffect} from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('everything');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
    try{
      
        const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${term}&api-key=${process.env.REACT_APP_KEY}`);
        const movies = await res.json();
        console.log(movies.results);
        setMovies(movies.results)
      }
    catch(error){
      console.log(error);
    }
  }
    fetchMovies();
  }, []);
  return (
    <>
      <section>

      </section>
    </>
  );
}

export default App;
