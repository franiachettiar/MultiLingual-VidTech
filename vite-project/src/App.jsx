import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>MultiLingual-VidTech</h1>
        <nav>
          <a href="#">Products</a>
          <a href="#">Use Cases</a>
          <a href="#">Resources</a>
          <a href="#">For Business</a>
          <a href="#">Pricing</a>
          <button>Talk to Sales</button>
          <button>Login</button>
          <button>Sign Up</button>
        </nav>
      </header>
      <main>
        <section className="video-translator">
          <h2>Video Translator</h2>
          <p>
            Automatically translate your videos into +125 different languages,
            using Subtitles or AI Voice Dubbing!
          </p>
          <button>Translate with Subtitles</button>
          <button>Translate Voice (AI Dubbing)</button>
        </section>
      </main>
    </div>
  );
}

export default App;
