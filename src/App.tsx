import "./App.css";

function App() {
  return (
    <div className="homepage">
      <section>
        <div className="flex-container">
          <div>
            <h1>Hi, I'm Muhammad Wildan</h1>
            <h2>Welcome to my personal blog!</h2>
            <div className="warning-container">
              <i
                data-eva="alert-triangle-outline"
                data-eva-fill="#ff6161"
                className="icon"
              ></i>
              <p>This Website is under development</p>
            </div>
          </div>
          <div className="card-container">
            <a
              href="https://github.com/gelembungsahabat?tab=repositories"
              className="card has-bg-img project-list-img"
            >
              <div className="card-title-container">
                <span className="card-title">Project List</span>
              </div>
            </a>
            <a className="card has-bg-img anime-recommendation-img">
              <div className="card-title-container">
                <span className="card-title">Anime Recommendation</span>
              </div>
            </a>
            <a className="card has-bg-img fun-things-img">
              <div className="card-title-container">
                <span className="card-title">Fun Things</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-container">
          <div>
            <h1>Second Section</h1>
            <h2>Raw Second Section</h2>
            <div className="warning-container">
              <i
                data-eva="alert-triangle-outline"
                data-eva-fill="#ff6161"
                className="icon"
              ></i>
              <p>This Website is under development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
