import { Box, Heading, Image, Text } from "@chakra-ui/react";

import "../styles/about.scss";
import jaskaran from "../assets/jaskaran.jpg";

const About = () => {
	return (
		<Box className="about">
			<Box className="inner">
				<Heading className="about-title">About Me</Heading>
				<Text className="about-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec viverra fermentum nibh. Donec euismod est augue, id
					interdum urna sodales nec.
				</Text>
				<Image
					src={jaskaran}
					alt="Jaskaran's picture"
					className="about-image"
				/>
				<Text className="about-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec viverra fermentum nibh. Donec euismod est augue, id
					interdum urna sodales nec.
				</Text>
			</Box>
		</Box>
	);
};

export default About;
