import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl underline">Hello world ...</h1>
      <Link to={"/about"}>Go to About</Link>
    </div>
  );
};

export default App;
