import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail";
function MovieApp(){
	return <Router>
	<Routes>
		<Route path="/movie/:id" element={<Detail />} />
		<Route path="/" exact element={<Home />} />
	</Routes>
	</Router>
	}

export default MovieApp;
