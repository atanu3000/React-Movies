import { useState } from "react";

export default function SearchBox({searchMovies}) {
    const [searchName, setSearchName] = useState("");

    const handleSearch = () => {
        searchMovies(searchName);
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="searchBox input-group container my-4">
            <input
                type="text"
                className="form-control border border-0 shadow-lg rounded-start-4 py-3 px-4 fs-4"
                placeholder="Search for Movies..."
                aria-describedby="search-btn"
                style={{"textTransform": "capitalize"}}
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                className="btn btn-secondary shadow-lg rounded-end-4 fs-4 d-flex align-items-center"
                type="button"
                id="search-btn"
                onClick={handleSearch}
            >
                <i className="fa-solid fa-magnifying-glass px-1" />
            </button>
        </div>
    );
}
