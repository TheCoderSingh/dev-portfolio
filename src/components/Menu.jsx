import { Box, Image } from "@chakra-ui/react";

import menuIcon from "../assets/hamburger.png";

const Menu = () => {
	return (
		<Box className="inner">
			<Image src={menuIcon} w={10} ml="auto" mt={4} cursor={"pointer"} />
		</Box>
	);
};

export default Menu;
