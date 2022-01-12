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

const Home = () => {
	return (
		<Box className="intro">
			<Box className="inner">
				<Box className="intro-mobtab">
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
							I'm a <span>software developer</span>, based in
							Vancouver, BC with a vision to revolutionize the
							world through code.
						</Text>
						<Text>
							Currently looking for opportunities. View my resume
							<a
								href="https://drive.google.com/file/d/1XpmxqBWO8oeApiSrrJnHCb9fDzx35ElL/view?usp=sharing"
								target={"_blank"}
								rel="noopener rorefferer"
							>
								{" "}
								here
							</a>
							.
						</Text>
					</Box>
					<Box className="intro-sections intro-sections-mobile">
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
						<Flex
							className="intro-section"
							justifyContent={"right"}
						>
							<Box
								className="intro-section-content"
								textAlign={"right"}
								mr={2}
							>
								<Heading>Wanna skip to the good part?</Heading>
								<Link href="#">View my projects</Link>
							</Box>
							<Box className="intro-section-image">
								<Image src={projects} alt="projects" />
							</Box>
						</Flex>
					</Box>
					<Flex
						className="intro-sections intro-sections-tab"
						justifyContent="space-around"
					>
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
						<Flex className="intro-section">
							<Box className="intro-section-image">
								<Image src={projects} alt="projects" />
							</Box>
							<Box className="intro-section-content" mr={2}>
								<Heading>Wanna skip to the good part?</Heading>
								<Link href="#">View my projects</Link>
							</Box>
						</Flex>
					</Flex>
					{/* <Box className="intro-scroll">
						<Image src={scroll} alt="scroll down arrow" />
					</Box> */}
				</Box>
				<Box className="intro-desktop">
					<Box className="intro-text">
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
								I'm a <span>software developer</span>, based in
								Vancouver, BC with a vision to revolutionize the
								world through code.
							</Text>
							<Text>
								Currently looking for opportunities. View my
								resume
								<a
									href="https://drive.google.com/file/d/1XpmxqBWO8oeApiSrrJnHCb9fDzx35ElL/view?usp=sharing"
									target={"_blank"}
									rel="noopener rorefferer"
								>
									{" "}
									here
								</a>
								.
							</Text>
						</Box>
					</Box>
					<Box className="separator" />
					<Flex className="intro-sec">
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

						<Flex className="intro-section">
							<Box className="intro-section-image">
								<Image src={projects} alt="projects" />
							</Box>
							<Box className="intro-section-content" mr={2}>
								<Heading>Wanna skip to the good part?</Heading>
								<Link href="#">View my projects</Link>
							</Box>
						</Flex>
					</Flex>
				</Box>
				<Box className="intro-scroll">
					<Image src={scroll} alt="scroll down arrow" />
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
