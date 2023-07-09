import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getDetails = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getDetails();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={detail.medium_cover_image} alt=""></img>
          <div>
            Genres:
            {detail.genres.map((e) => (
              <div>{e}</div>
            ))}
          </div>
          <div>language: {detail.language}</div>
          <div>like_count: {detail.like_count}</div>
          <div>rating: {detail.rating}</div>
          <div>runtime: {detail.runtime}</div>
          <div>description_intro: {detail.description_intro}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
