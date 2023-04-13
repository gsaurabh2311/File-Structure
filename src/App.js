import { dir } from "./config.js";
import Folder from "./components/Folder.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Folder dir={dir} />
    </div>
  );
}
