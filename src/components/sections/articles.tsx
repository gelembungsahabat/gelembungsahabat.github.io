import { IoWarningOutline } from "react-icons/io5";

export function Articles() {
  return (
    <section>
      <div className="flex-container">
        <div>
          <h1>Articles Section</h1>
          <h2>Raw Articles Section</h2>
          <div className="warning-container">
            <IoWarningOutline />
            <p>This Website is under development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
