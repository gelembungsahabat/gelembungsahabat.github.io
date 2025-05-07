import { IoWarningOutline } from "react-icons/io5";

export function AnimeRecommendation() {
  return (
    <section>
      <div className="flex-container">
        <div>
          <h1>Anime Recommendation Section</h1>
          <h2>Raw Anime Recommendation Section</h2>
          <div className="warning-container">
            <IoWarningOutline />
            <p>This Website is under development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
