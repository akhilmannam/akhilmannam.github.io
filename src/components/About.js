import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import styled from "styled-components/macro";

const values = [
	"నమస్కారం, నా పేరు",
	"Hi, my name is",
	"Hola, mi nombre es",
	"Konnichiwa, watashi wa",
];

const About = () => {
	const { result, dencrypt } = useDencrypt();

	useEffect(() => {
		let i = 0;

		const action = setInterval(() => {
			dencrypt(values[i]);

			i = i === values.length - 1 ? 0 : i + 1;
		}, 5000);

		return () => clearInterval(action);
		//eslint-disable-next-line
	}, []);

	return (
		<Intro>
			<IntroImage>
				<ImageContainer>
					<Img src="/assets/me.jpg" alt="" />
				</ImageContainer>
			</IntroImage>
			<IntroDescription>
				<DescriptionContainer>
					<DescriptionTitle>{result}</DescriptionTitle>
					<DescriptionName>Akhil Mannam</DescriptionName>
					<DescriptionText>
						I build things for the web. I am a full-stack developer
						who specializes in building(and occasionally designing)
						excellent digital experiences.
					</DescriptionText>

					<DescriptionText>
						I devote significant attention to developing bug-free
						code and utilize high-quality packages which make coding
						with React easier than usual.
					</DescriptionText>
				</DescriptionContainer>
			</IntroDescription>
		</Intro>
	);
};

const Intro = styled.section`
	min-height: 100vh;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
`;

const IntroImage = styled.div`
	display: grid;
	place-items: center;
`;

const ImageContainer = styled.div`
	width: 200px;
	margin-bottom: 30px;

	@media screen and (max-width: 600px) {
		width: 160px;
		margin-bottom: 20px;
	}
`;
const Img = styled.img`
	max-width: 100%;
	border-radius: 50%;

	&:hover {
		transform: translate3D(0, -1px, 0) scale(1.03);
		box-shadow: 8px 28px 50px rgba(39, 44, 49, 0.07),
			1px 6px 12px rgba(39, 44, 49, 0.04);
		transition: all 0.1s ease;
	}
`;

const IntroDescription = styled.div`
	display: grid;
	place-items: center;
	text-align: center;
`;

const DescriptionContainer = styled.div`
	max-width: 90%;
`;

const DescriptionTitle = styled.h3`
	height: 50px;
	font-size: 2rem;
	color: #444;
	margin-bottom: 10px;
	font-weight: 300;

	@media screen and (max-width: 600px) {
		font-size: 28px;
		margin-bottom: 14px;
	}
`;

const DescriptionName = styled.h2`
	font-size: 2.25rem;
	margin-bottom: 10px;
`;

const DescriptionText = styled.p`
	font-size: 1rem;
	color: #555;
	margin-bottom: 20px;
	max-width: 500px;

	@media screen and (max-width: 600px) {
		font-size: 0.75rem;
		margin-bottom: 10px;
	}
`;

export default About;
