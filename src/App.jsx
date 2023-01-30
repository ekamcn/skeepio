import { createPortal } from "react-dom";
import Modal from "./components/Modal";

function App() {
	return <div className="App">{createPortal(<Modal />, document.body)}</div>;
}

export default App;
