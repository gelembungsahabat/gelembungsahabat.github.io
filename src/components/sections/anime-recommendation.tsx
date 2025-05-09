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
      {animeName}
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
                  index={index}
                  selectedAnimeIndex={selectedAnimeIndex}
                  setSelectedAnimeIndex={setSelectedAnimeIndex}
                  animeName={anime.name}
                />
              );
            }
          )}
        </div>
        <div className="anime-details">
          {animeRecommendationData[selectedAnimeIndex].details}
        </div>
      </div>
    </section>
  );
}
