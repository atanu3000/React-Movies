import React from "react";

export default function MovieCard({ movie }) {
    const cardStyle = {
        background:
            `linear-gradient(#00000000, #0000001b, #000000d1), url(${movie.Poster === "N/A" ? 'https://via.placeholder.com/400': movie.Poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "300px",
        objectFit: "cover",
        transition: "0.5s ease",
        overflow: "hidden",
    };
    // https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg
    return (
        <div
            className="card shadow-lg m-3"
            style={cardStyle}
        >
            <div className="details px-3">
                <p className="text-white fs-5">
                    {movie.Title} ({movie.Year})
                </p>
            </div>
        </div>
    );
}
