import { Box, Heading } from "@chakra-ui/react";

import "./App.scss";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
	return (
		<Box className="App">
			<Menu />
			<Home />
		</Box>
	);
}

export default App;
