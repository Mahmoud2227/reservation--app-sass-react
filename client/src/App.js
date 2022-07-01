import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Property from "./Pages/Property/Property";
import List from "./Pages/List/List";

import "./App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/stays' element={<List />} />
				<Route path='/stays/:id' element={<Property />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
