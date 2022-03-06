import React from "react";
import Card from "./Card";
import Movies from "./Movies";

const App = () => {
  return (
    <div>
      <h1 className="head"> My Movies</h1>
    <div className="card">
      <Card
        name={Movies[0].name}
        imgSrc={Movies[0].imgSrc}
        produced={Movies[0].produced}
        liked={Movies[0].liked}
      />
      <Card
        name={Movies[1].name}
        imgSrc={Movies[1].imgSrc}
        produced={Movies[1].produced}
        liked={Movies[1].liked}
      />
      <Card
        name={Movies[2].name}
        imgSrc={Movies[2].imgSrc}
        produced={Movies[2].produced}
        liked={Movies[2].liked}
      />
     </div>
    </div>
  );
};

export default App;
