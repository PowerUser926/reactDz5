import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Link,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import React from "react";

function Info() {
  return (
    <div>
      <h3>Kyiv</h3>
      <img src="./images/kyiv.jpg" alt="kyiv img" />
      <p>
        Kyiv is the capital and most populous city of Ukraine. It is in
        north-central Ukraine along the Dnieper River. As of 1 January 2021, its
        population was 2,962,180, making Kyiv the seventh-most populous city in
        Europe. <br /> Kyiv is an important industrial, scientific, educational,
        and cultural center in Eastern Europe. It is home to many high-tech
        industries, higher education institutions, and historical landmarks. The
        city has an extensive system of public transport and infrastructure,
        including the Kyiv Metro.
      </p>
    </div>
  );
}

function FamousAttraction() {
  return (
    <div>
      <h3>St. Sophia's Cathedral</h3>
      <img
        src="./images/st-sophias-cathedral.jpg"
        alt="st-sophias-cathedral img"
      />
      <p>
        St. Sophia's Cathedral (also called Saint Sophia Cathedral) is one of
        seven UNESCO World Heritage Sites in Ukraine and was awarded the
        important status in the 1980s. It was constructed in 1037 and is named
        for Hagia Sophia. Since it's a favorite of tourists, visiting earlier in
        the day is recommended. <br />
        It's one of the oldest and most jaw-dropping of Kiev's impressive
        churches. Beautiful murals, ancient mosaics, and frescoes adorn the
        interior. Additional structures have been added over the years; one
        entrance fee is good for all. <br />
        Enjoy the views over the city form the bell tower. Tours are available.{" "}
        <br />
        Address: Volodymyrska St, 24, Kyiv
      </p>
    </div>
  );
}

function OtherAttraction() {
  return (
    <div>
      <h4>St. Andrew's Church</h4>
      <img src="./images/st-andrews-church.jpg" alt="St. Andrew's Church img" />
      <h4>National Art Museum of Ukraine</h4>
      <img
        src="./images/national-art-museum-ukraine.jpg"
        alt="National Art Museum of Ukraine img"
      />
      <h4>Kiev Pechersk Lavra Monastery</h4>
      <img
        src="./images/kiev-pechersk-lavra-monastery.jpg"
        alt="Kiev Pechersk Lavra Monastery img"
      />
      <h4>Mariyinsky Palace</h4>
      <img src="./images/mariyinsky-palace.jpg" alt="Mariyinsky Palace img" />
    </div>
  );
}

function Photos() {
  return (
    <div>
      <h3>Photos</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <img
          src="./images/st-sophias-cathedral.jpg"
          alt="st-sophias-cathedral img"
          style={{ width: "30%", marginBottom: "10px" }}
        />
        <img
          src="./images/st-andrews-church.jpg"
          alt="St. Andrew's Church img"
          style={{ width: "30%", marginBottom: "10px" }}
        />
        <img
          src="./images/national-art-museum-ukraine.jpg"
          alt="National Art Museum of Ukraine img"
          style={{ width: "30%", marginBottom: "10px" }}
        />
        <img
          src="./images/kiev-pechersk-lavra-monastery.jpg"
          alt="Kiev Pechersk Lavra Monastery img"
        />
        <img
          src="./images/mariyinsky-palace.jpg"
          alt="Mariyinsky Palace img"
          style={{ width: "30%", marginBottom: "10px" }}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ width: "80%", margin: "0 auto" }}>
      <Router>
        <nav
          style={{
            marginBottom: "10px",
            padding: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/info">Info about city</Link>
          <Link to="/famous_attraction">The most famous attraction</Link>
          <Link to="/other_attractions">Other attractions</Link>
          <Link to="/photos">City photos</Link>
        </nav>
        <Routes>
          <Route path="/info" element={<Info />}></Route>
          <Route
            path="/famous_attraction"
            element={<FamousAttraction />}
          ></Route>
          <Route
            path="/other_attractions"
            element={<OtherAttraction />}
          ></Route>
          <Route path="/photos" element={<Photos />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
