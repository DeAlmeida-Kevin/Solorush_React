import "./main.css";
import { mangas } from "./datamanga";
import { useState } from "react";

function Book() {

    const [flippedCardId, setFlippedCardId] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [search, setSearch] = useState("");
    const mangasFiltered = mangas.filter((manga) => {
        return manga.title.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <>
            <nav className="NavBar">
                <input className="inputSearch" onChange={(event) => { setSearch(event.target.value) }}
                    type="text"
                    value={search}
                    placeholder="🔎 Search a manga ">
                </input>
                <div className="navlogo">
                    <img src="src/components2/imglogo/discorde.png" alt="" />
                    <img src="src/components2/imglogo/facebook.png" alt="" />
                    <img src="src/components2/imglogo/instagram.png" alt="" />
                    <img src="src/components2/imglogo/tic.png" alt="" />
                    <img src="src/components2/imglogo/twitter.png" alt="" />
                    <img src="src/components2/imglogo/yahoo.png" alt="" />
                </div>
            </nav>

            <article className="mangascontainer">
                {mangasFiltered.map((manga) => (
                    <div
                        key={manga.id}
                        className={`card ${flippedCardId === manga.id ? 'flipped' : ''}`}
                        onClick={() =>
                            setFlippedCardId(flippedCardId === manga.id ? null : manga.id)
                        }
                    >
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={manga.image} alt={manga.title} />
                            </div>
                            <div className="card-back">
                                <h2 className="title">{manga.title}</h2>
                                <p className="author">{manga.author}</p>
                                <p className="releaseDate">{manga.releaseDate}</p>
                                <p className="genre">{manga.genre}</p>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsFavorite(!isFavorite);
                                    }}
                                    type="button"
                                >
                                    {isFavorite ? '❤️' : '🖤'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </>
    );
}

export default Book