import { Footer } from "@components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
