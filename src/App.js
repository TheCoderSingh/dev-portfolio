import { Box } from "@chakra-ui/react";

import "./App.scss";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Box className="App">
			<Box className="inner">
				<Menu />
			</Box>
			<Home />
			<Projects />
			<About />
			<Skills />
			<Contact />
			<Footer />
		</Box>
	);
}

export default App;
