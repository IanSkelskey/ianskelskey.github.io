export default function SpotifyPlayer({ id, type, className, title }) {
    return (
        <iframe
            title={title}
            className={className}
            src={`https://open.spotify.com/embed/${type}/${id}`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}