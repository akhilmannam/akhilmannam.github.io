import React from "react";
import styled from "styled-components/macro";

function Skills() {
	return (
		<Section id="skills">
			<TechHeading>Some Technologies I've worked with</TechHeading>
			<TechLogos>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/mongodb.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/html5.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/css3.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/netlify.svg"
						alt=""
					/>
				</span>
				<span>
					<img
						src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
						alt=""
					/>
				</span>
			</TechLogos>
		</Section>
	);
}

const Section = styled.section`
	padding: 0 2rem;
	display: grid;
	place-items: center;
	margin-bottom: 2rem;
`;

const TechHeading = styled.h2`
	padding: 1rem;
	font-size: 1.25rem;
	font-weight: 400;
`;

const TechLogos = styled.div`
	margin-bottom: 20px;
	padding: 1rem;

	@media screen and (max-width: 600px) {
		margin-bottom: 10px;
	}

	img {
		height: 40px;
		width: 40px;
		margin: 5px;
	}
`;

export default Skills;
