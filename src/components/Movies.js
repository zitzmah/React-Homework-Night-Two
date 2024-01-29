import Movie from "./Movie";
import movieData from "../movieData";
import "../styles.css"

const Movies = () => {
  return <div className="container">{movieData.map(value => (
    <Movie
      image={value.image}
      name={value.name}
      year={value.year}
      rating={value.rating}
    />
  ))}    </div>
}

export default Movies;