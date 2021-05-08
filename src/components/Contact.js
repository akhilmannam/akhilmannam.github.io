import React from "react";
import styled from "styled-components/macro";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IconButton } from "@material-ui/core";

function Contact() {
	return (
		<Section id="contact">
			<ConnectHeading>Get in Touch</ConnectHeading>
			<IconsContainer>
				<IconButton
					aria-label="github.com"
					onClick={() =>
						window.open(
							"https://www.github.com/akhilmannam",
							"_blank"
						)
					}
					id="github"
				>
					<GitHubIcon />
				</IconButton>
				<IconButton
					aria-label="linkedin.com"
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/mannam-akhil-55341014a/",
							"_blank"
						)
					}
					id="linkedin"
				>
					<LinkedInIcon />
				</IconButton>
				<IconButton
					aria-label="twitter.com"
					onClick={() =>
						window.open(
							"https://twitter.com/omnikageyama",
							"_blank"
						)
					}
					id="twitter"
				>
					<TwitterIcon />
				</IconButton>
			</IconsContainer>
		</Section>
	);
}

const Section = styled.section`
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
`;

const ConnectHeading = styled.h2`
	margin-top: 1rem;
	text-align: center;
	font-weight: 300;
`;

const IconsContainer = styled.div`
	margin: 0.75rem;
	padding: 0.75rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export default Contact;
