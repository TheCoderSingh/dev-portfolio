import {
	Box,
	Button,
	FormControl,
	Heading,
	Input,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

import "../styles/contact.scss";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<Box className="contact">
			<Box className="inner">
				<Heading className="contact-title">Let's Talk!</Heading>
				<Box className="contact-form">
					<form>
						<FormControl isRequired>
							<Input
								id="name"
								placeholder="Name"
								onChange={handleNameChange}
								value={name}
							/>
							<Input
								id="email"
								placeholder="Email"
								type="email"
								onChange={handleEmailChange}
								value={email}
							/>
							<Textarea
								id="message"
								placeholder="Message"
								onChange={handleMessageChange}
								value={message}
							/>
							<Button type="Submit">SEND</Button>
						</FormControl>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
