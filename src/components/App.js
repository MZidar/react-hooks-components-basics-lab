import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About(){
  return(
    <div id="about">
      <p>hi!</p>
      <img src="https://www.biography.com/.image/t_share/MTc5NjQ1NTQ1MjgxNzU5MTky/hbk-studio-1-1.jpg"/>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
