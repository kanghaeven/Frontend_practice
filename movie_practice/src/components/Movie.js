import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="" />
      <h2>
        <Link to={`${process.env.PUBILC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <div>{summary}</div>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
