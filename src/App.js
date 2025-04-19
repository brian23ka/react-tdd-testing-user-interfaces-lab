// src/App.js
import React from "react";

function App() {
  return (
    <main>
      <h1>Hi, I&apos;m YourName</h1>
      <img
        src="https://example.com/your-photo.jpg"
        alt="Portrait of YourName"
      />
      <h2>About Me</h2>
      <p>
        I am a frontend developer with a passion for building beautiful,
        accessible, and performant web applications. I love learning new
        technologies and solving challenging problems.
      </p>
      <nav>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </nav>
    </main>
  );
}

export default App;
