import "../css/MovieModal.css"

function MovieModal({ movie, onClose }) {
    if (!movie) return null

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <div className="modal-info">
                        <h2>{movie.title}</h2>
                        {movie.release_date && (
                            <p className="modal-release-date">
                                <strong>Release Date:</strong> {movie.release_date}
                            </p>
                        )}
                        {movie.vote_average > 0 && (
                            <p className="modal-rating">
                                <strong>Rating:</strong> {movie.vote_average.toFixed(1)} / 10
                                <span className="vote-count">({movie.vote_count} votes)</span>
                            </p>
                        )}
                        {movie.original_language && (
                            <p className="modal-language">
                                <strong>Language:</strong> {movie.original_language.toUpperCase()}
                            </p>
                        )}
                        {movie.overview && (
                            <div className="modal-overview">
                                <strong>Overview:</strong>
                                <p>{movie.overview}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal
