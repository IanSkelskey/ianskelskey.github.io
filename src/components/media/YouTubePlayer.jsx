export default function YouTubePlayer({ id, className, title }) {
    return (
        <iframe
            className={className}
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
        />
    );
}