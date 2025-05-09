import "./styles/anime-recommendation.css";
import { animeRecommendationData, type AnimeRecommendation } from "../../data";

export function AnimeRecommendation() {
  return (
    <section className="anime-recommendation">
      <div>
        <h1>Anime Recommendation</h1>
      </div>
      <div className="anime-recommendation-wrapper">
        {/* <div>
          <h1>Anime Recommendation</h1>
        </div> */}
        <div className="anime-list">
          {animeRecommendationData.map((coba: AnimeRecommendation) => {
            return <div className="anime-list-item"> {coba.name}</div>;
          })}
        </div>
        <div className="anime-details">coba</div>
      </div>
    </section>
  );
}
