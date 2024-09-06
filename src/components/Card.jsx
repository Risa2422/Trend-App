import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ url, showType }) => {
  console.log(showType);
  const [data, setData] = useState([]);

  async function getAllShowDataBySearch() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDhhMDdiNzMxNjI0NmQxMmYyNDUwZmU1NjU1OWEyNSIsIm5iZiI6MTcyNTI5ODEwNi4yMzI5NjcsInN1YiI6IjY2YjNiNzQyMDFlZjcyMTgzMjg4NmM0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3boyxwx8S5ldGxNSUjuFHz6-R5JuDm9SdQeo3LcJlkg",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.results;
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllShowDataBySearch();
      console.log(result);
      if (result) {
        setData(result);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <div className="card-main">
        {data.map((element) => (
          <div className="card-body" key={element.id}>
            <div className="show-image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} // もし画像の上部を表示させたい場合は背景画像にするしかない？
                alt=""
              />
            </div>
            <div className="show-details">
              {showType === "movie" ? ( // なぜフラグメントで囲む必要がある？
                <>
                  {/* <p>movie</p> */}
                  <h3 className="show-name">
                    {element.original_title || "No Title Movie"}
                  </h3>
                </>
              ) : (
                <>
                  {/* <p>tv</p> */}
                  <h3 className="show-name">{element.name || "No Title TV"}</h3>
                </>
              )}

              <div className="show-description">
                {element.overview.trim() ? (
                  <p>{element.overview}</p>
                ) : (
                  <p>No description</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
