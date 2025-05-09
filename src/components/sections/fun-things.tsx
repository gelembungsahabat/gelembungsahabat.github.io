import "./styles/fun-things.css";
import { IoWarningOutline } from "react-icons/io5";

export function FunThings() {
  return (
    <section className="fun-things">
      <div className="flex-container">
        <div>
          <h1>Fun Things Section</h1>
          <h2>Raw Fun Things Section</h2>
          <div className="warning-container">
            <IoWarningOutline />
            <p>This Website is under development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
