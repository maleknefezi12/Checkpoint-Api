import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [datamovie, setDataMovie] = useState([]);
  useEffect(() => {
    axios
      .get("https://movie-app-gmc.herokuapp.com/api/movies")
      .then((res) => setDataMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }}
    >
      {datamovie.map((e) => (
        <Cards movie={e} />
      ))}
    </div>
  );
}

export default App;
