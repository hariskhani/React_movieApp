import Hero from "./Hero";
import { Link } from "react-router-dom";



const MovieBox = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailView = `/movies/${movie.id}`
    return (
        <>
            <div className="col-lg-3 col-md-3 col-2 my-4">
                <div className="card">
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to={detailView} className="btn btn-primary">Show Details</Link>
                    </div>
                </div>

            </div>
        </>
    )
}




const Searchview = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieBox movie={obj} key={i} />
    })
    return (
        <div>
            <Hero text={title}/>
            {resultsHtml &&
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            }
        </div>
    )
}

export default Searchview;