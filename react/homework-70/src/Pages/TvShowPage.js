import React, { useContext } from "react";
import { TvaMazeContext } from "../Context/TvMazeSearch";
import ReactHtmlParser from "react-html-parser";
import Spinner from "../components/Spinner";

const TvShowPage = () => {
  const { selectedTvShow, loading } = useContext(TvaMazeContext);

  const {
    name,
    type,
    language,
    runtime,
    premiered,
    rating,
    image,
    summary,
    network,
    genres
  } = selectedTvShow;

  return (
    <>
      {loading && <Spinner />}
      {!!Object.keys(selectedTvShow).length && (
        <div className="mt-3">
          <h1 className="text-center mb-4">{name}</h1>
          <div className="d-flex justify-content-between">
            <img src={image ? image.medium : ""} alt="" />
            <div className="px-5 flex-grow-1">
              <p>
                <strong>Type:</strong> {type}
              </p>
              <p>
                <strong>Language:</strong> {language || "-"}
              </p>
              <p>
                <strong>Runtime:</strong> {runtime || "0"} min
              </p>
              <p>
                <strong>Premier:</strong> {premiered || "-"}
              </p>
              <p>
                <strong>Country:</strong> {network ? network.country.name : "-"}
              </p>
              <hr />
              {ReactHtmlParser(summary)}
            </div>
            {(rating.average || genres.length) && (
              <div className="border p-3 rounded align-self-start">
                {rating.average && (
                  <p className="mb-1">
                    <strong>Rating:</strong> {rating.average}
                  </p>
                )}
                {genres.length && (
                  <>
                    <strong>Genres:</strong>
                    <ul className="m-0 px-3">
                      {genres.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TvShowPage;
