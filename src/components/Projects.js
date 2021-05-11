import React from "react";
import { projectDetails } from "./projectDetails";
import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal/Fade";

function Projects() {
	return (
		<Section id="projects">
			<h1>Projects</h1>
			<div className="row">
				<Fade bottom cascade>
					{projectDetails.map((project) => (
						<div className="col-lg-4 col-md-6 col-sm-12 mb-3">
							<div className="card">
								<img
									src={`/assets/${project.background}`}
									class="card-img-top"
									alt={project.background}
								/>
								<div className="card-body">
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<IconsContainer>
										<IconButton
											aria-label="github.com"
											onClick={() =>
												window.open(
													project.git,
													"_blank"
												)
											}
											id="github"
										>
											<GitHubIcon />
										</IconButton>
										<IconButton
											aria-label="hosted-site"
											onClick={() =>
												window.open(
													project.site,
													"_blank"
												)
											}
										>
											<LanguageIcon />
										</IconButton>
									</IconsContainer>
									<Technologies>
										{project.tech.join(" ")}
									</Technologies>
								</div>
							</div>
						</div>
					))}
				</Fade>
			</div>
		</Section>
	);
}

const Section = styled.section`
	padding: 0 2rem;
	display: grid;
	place-items: center;
	margin-bottom: 3rem;
`;

const IconsContainer = styled.div`
	margin: 0.75rem;
	padding: 0.75rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Technologies = styled.div`
	display: flex;
	word-spacing: 5px;
	align-self: center;
`;

export default Projects;
