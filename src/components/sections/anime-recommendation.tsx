import "./styles/anime-recommendation.css";
import { animeRecommendationData, type AnimeRecommendation } from "../../data";
import { useState } from "react";
import { usePreventScrolling } from "../../hooks";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

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

  // previous and next button functionality on mobile and tablet
  const CarouselOnClick = (state: "previous" | "next") => {
    if (selectedAnimeIndex > 0 && state === "previous") {
      return setSelectedAnimeIndex(selectedAnimeIndex - 1);
    }
    if (selectedAnimeIndex < 8 && state === "next") {
      return setSelectedAnimeIndex(selectedAnimeIndex + 1);
    }
  };

  const imgUrl = animeRecommendationData[selectedAnimeIndex].imgUrl;

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
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.9)
            ), url(${imgUrl})`,
          }}
        >
          <div className="anime-details-text">
            <h1>{animeRecommendationData[selectedAnimeIndex].name}</h1>
            <h2>{animeRecommendationData[selectedAnimeIndex].genre}</h2>
            {animeRecommendationData[selectedAnimeIndex].details}
          </div>
          <div className="arrow-button-wrapper">
            <button
              className="arrow-button"
              onClick={() => CarouselOnClick("previous")}
            >
              <MdOutlineArrowBackIos />
            </button>
            <button
              className="arrow-button"
              onClick={() => CarouselOnClick("next")}
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
