import "./styles/hiragana-quiz.css";
import { hiraganaData } from "../../data/hiragana-data";

export function FunThings() {
  return (
    <section className="hiragana-quiz">
      <div>
        <h1>Random Hiragana (ひらがな) Quiz</h1>
      </div>
      <div className="hiragana-quiz-container">
        {Object.entries(hiraganaData).map(([key]) => (
          <div className="hiragana-container">
            <h1 className="hiragana">{key}</h1>
            <input type="text" />
          </div>
        ))}
      </div>
    </section>
  );
}
