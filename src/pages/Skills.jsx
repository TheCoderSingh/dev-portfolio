import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

import "../styles/skills.scss";
import html from "../assets/html.svg";
import css from "../assets/css.png";
import sass from "../assets/sass.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import nodejs from "../assets/nodejs.svg";
import git from "../assets/git.svg";
import mysql from "../assets/mysql.svg";
import react from "../assets/react.png";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import wordpress from "../assets/wordpress.png";

const Skills = () => {
	return (
		<Box className="skills">
			<Box className="inner">
				<Heading className="skills-title">Skills</Heading>
				<Grid
					templateColumns="repeat(4, 1fr)"
					className="skills-list"
					columnGap={3}
					rowGap="30px"
				>
					<GridItem>
						<Image src={html} alt="html" />
					</GridItem>
					<GridItem>
						<Image src={css} alt="css" />
					</GridItem>
					<GridItem>
						<Image src={sass} alt="sass" />
					</GridItem>
					<GridItem>
						<Image src={javascript} alt="javascript" />
					</GridItem>
					<GridItem>
						<Image src={jquery} alt="jquery" />
					</GridItem>
					<GridItem colSpan={2}>
						<Image src={nodejs} alt="nodejs" />
					</GridItem>
					<GridItem>
						<Image src={git} alt="git" />
					</GridItem>
					<GridItem colSpan={2}>
						<Image src={mysql} alt="mysql" />
					</GridItem>
					<GridItem colSpan={2}>
						<Image src={react} alt="react" />
					</GridItem>
					<GridItem>
						<Image src={android} alt="android" />
					</GridItem>
					<GridItem>
						<Image src={ios} alt="ios" />
					</GridItem>
					<GridItem colSpan={2}>
						<Image src={wordpress} alt="wordpress" />
					</GridItem>
				</Grid>
			</Box>
		</Box>
	);
};

export default Skills;
