import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

import "../styles/home.scss";
import coffee from "../assets/coffee.png";
import projects from "../assets/projects.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import scroll from "../assets/scroll.png";
import Menu from "../components/Menu";

const Home = () => {
	return (
		<Box className="intro">
			<Box className="inner">
				<Box className="intro-title">
					<Heading as="h2">Hi!</Heading>
					<Heading as="h2">I'm Jaskaran.</Heading>
					<Flex className="intro-title-aka">
						<Text>a.k.a</Text>
						<Text>&nbsp;TheCoderSingh</Text>
					</Flex>
				</Box>
				<Box className="intro-description">
					<Text>
						Frontend developer with a vision to revolutionize the
						world through code. Frontend developer with a vision to
						revolutionize the world through code.
					</Text>
				</Box>
				<Box className="intro-sections">
					<Flex className="intro-section">
						<Box className="intro-section-image">
							<Image src={coffee} alt="coffee mug" />
						</Box>
						<Box className="intro-section-content">
							<Heading>Wanna grab a coffee?</Heading>
							<Text>Shoot me an email at</Text>
							<Link href="mailto:thecodersingh@gmail.com">
								thecodersingh@gmail.com
							</Link>
						</Box>
					</Flex>
					<hr />
					<Flex className="intro-section">
						<Box className="intro-section-image">
							<Image src={projects} alt="projects" />
						</Box>
						<Box className="intro-section-content">
							<Heading>Wanna skip to the good part?</Heading>
							<Link href="#">View my projects</Link>
						</Box>
					</Flex>
				</Box>
				<Flex className="intro-social">
					<Link href="#">
						<Image src={facebook} alt="facebook logo" />
					</Link>
					<Link href="#">
						<Image src={instagram} alt="instagram logo" />
					</Link>
					<Link href="#">
						<Image src={twitter} alt="twitter logo" />
					</Link>
					<Link href="#">
						<Image src={github} alt="github logo" />
					</Link>
					<Link href="#">
						<Image src={linkedin} alt="linkedin logo" />
					</Link>
				</Flex>
				<Box className="intro-scroll">
					<Image src={scroll} alt="scroll down arrow" />
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
