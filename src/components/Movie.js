const Movie = (props) => {
    return (
        <div className="Movie">
            <img src={props.image} alt={props.name}/>
            <div>
                <h2>{props.name}</h2>
            </div>  
            <div>
                <h3>{props.year}</h3>
            </div>
            <div>
                <p>{props.rating}</p>
            </div>
        </div>)
}

export default Movie