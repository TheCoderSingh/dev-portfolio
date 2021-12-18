import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import "../styles/projects.scss";
import alunos from "../assets/alunos.png";
import aquashot from "../assets/aquashot.png";
import aura from "../assets/aura.png";
import crypto from "../assets/crypto.png";
import realEstate from "../assets/real-estate.png";
import hotels from "../assets/hotels.png";

const Projects = () => {
	return (
		<Box className="projects">
			<Box className="inner">
				<Heading className="projects-title">Projects</Heading>
				<Box className="project">
					<Image
						src={alunos}
						alt="alunos"
						className="project-image"
					/>
					<Heading className="project-title">Alunos</Heading>
					<Text className="project-description">
						Alunos improves homestay experiences by helping
						companies in Canada to manage homestay-related
						activities and faciliting communication.
					</Text>
					<Flex className="project-technologies" flexWrap={"wrap"}>
						<Text>HTML5</Text>
						<Text>SCSS</Text>
						<Text>Vue.js</Text>
						<Text>Laravel</Text>
						<Text>GraphQL</Text>
						<Text>Quasar</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
				<Box className="project">
					<Image
						src={aquashot}
						alt="aquashot"
						className="project-image"
					/>
					<Heading className="project-title">Aquashot</Heading>
					<Text className="project-description">
						AquaShot is a game created in Vanilla JavaScript with
						the concepts of object oriented programming.
					</Text>
					<Flex className="project-technologies">
						<Text>HTML5</Text>
						<Text>CSS3</Text>
						<Text>Javascript</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
				<Box className="project">
					<Image src={aura} alt="aura" className="project-image" />
					<Heading className="project-title">Aura</Heading>
					<Text className="project-description">
						Aura displays the air quality of the location you are
						planning to travel to and tells you whether it is safe
						to travel or not and provides you with a list of
						precautions to be taken.
					</Text>
					<Flex className="project-technologies">
						<Text>HTML5</Text>
						<Text>SCSS</Text>
						<Text>ReactJS</Text>
						<Text>MySQL</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
				<Box className="project">
					<Image src={crypto} alt="aura" className="project-image" />
					<Heading className="project-title">Crypto Tracker</Heading>
					<Text className="project-description">
						Aura displays the air quality of the location you are
						planning to travel to and tells you whether it is safe
						to travel or not and provides you with a list of
						precautions to be taken.
					</Text>
					<Flex className="project-technologies">
						<Text>HTML5</Text>
						<Text>SCSS</Text>
						<Text>ReactJS</Text>
						<Text>MySQL</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
				<Box className="project">
					<Image
						src={realEstate}
						alt="real estate"
						className="project-image"
					/>
					<Heading className="project-title">Real Estate</Heading>
					<Text className="project-description">
						Find properties available for sale and for rent with
						filters like price, property type and much more...
					</Text>
					<Flex className="project-technologies">
						<Text>HTML5</Text>
						<Text>CSS3</Text>
						<Text>ReactJS</Text>
						<Text>NextJS</Text>
						<Text>Chakra UI</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
				<Box className="project">
					<Image
						src={hotels}
						alt="hotels"
						className="project-image"
					/>
					<Heading className="project-title">Hotels</Heading>
					<Text className="project-description">
						Get hotels available near you with all the information
						including amenities, check-in &amp; check-out times,
						room photos and guest rating.
					</Text>
					<Flex className="project-technologies">
						<Text>HTML5</Text>
						<Text>CSS3</Text>
						<Text>ReactJS</Text>
						<Text>NextJS</Text>
						<Text>Chakra UI</Text>
					</Flex>
					<Flex>
						<Button>View Live</Button>
						<Button>GitHub</Button>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

export default Projects;
