import { Box } from "@chakra-ui/react";

import "./App.scss";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
	return (
		<Box className="App">
			<Box className="inner">
				<Menu />
			</Box>
			<Home />
			<Projects />
		</Box>
	);
}

export default App;
