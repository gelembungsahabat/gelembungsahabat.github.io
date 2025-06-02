import "./styles/anime-recommendation.css";
import { animeRecommendationData, type AnimeRecommendation } from "../../data";
import { useState } from "react";
import { usePreventScrolling } from "../../hooks/usePreventScrolling";

const AnimeRecommendationItem = (props: {
  index: number;
  selectedAnimeIndex: number;
  setSelectedAnimeIndex: (index: number) => void;
  animeName: string;
}) => {
  const { index, selectedAnimeIndex, setSelectedAnimeIndex, animeName } = props;
  return (
    <div
      className={
        index === selectedAnimeIndex
          ? "anime-list-item-active"
          : "anime-list-item"
      }
      onClick={() => setSelectedAnimeIndex(index)}
    >
      <h1>{animeName}</h1>
    </div>
  );
};

export function AnimeRecommendation() {
  const [selectedAnimeIndex, setSelectedAnimeIndex] = useState(0);
  // prevent scrolling on anime-list
  usePreventScrolling("anime-list");

  return (
    <section className="anime-recommendation">
      <div>
        <h1>Anime Recommendation</h1>
      </div>
      <div className="anime-recommendation-wrapper">
        <div className="anime-list">
          {animeRecommendationData.map(
            (anime: AnimeRecommendation, index: number) => {
              return (
                <AnimeRecommendationItem
                  key={index}
                  index={index}
                  selectedAnimeIndex={selectedAnimeIndex}
                  setSelectedAnimeIndex={setSelectedAnimeIndex}
                  animeName={anime.name}
                />
              );
            }
          )}
        </div>
        <div
          className="anime-details-wrapper"
          style={{
            background: `
            linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.9)
            ),url(${animeRecommendationData[selectedAnimeIndex].imgUrl}) no-repeat center center`,
            backgroundSize: "cover", // Ensures the image covers the whole area, even if it gets cropped
          }}
        >
          <div className="anime-details-text">
            <h1>{animeRecommendationData[selectedAnimeIndex].name}</h1>
            <h2>{animeRecommendationData[selectedAnimeIndex].genre}</h2>
            {animeRecommendationData[selectedAnimeIndex].details}
          </div>
        </div>
      </div>
    </section>
  );
}
