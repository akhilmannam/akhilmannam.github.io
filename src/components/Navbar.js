import React, { useState } from "react";
import styled from "styled-components/macro";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavContainer>
			<Nav>
				<Logo href="#">
					<Img src="/assets/a.png" alt="logo" />
				</Logo>

				<div style={{ display: "none" }}>
					Icons made by{" "}
					<a href="https://www.freepik.com" title="Freepik">
						Freepik
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
				<Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
					<div />
					<div />
				</Hamburger>

				<Menu isOpen={isOpen}>
					<MenuLink onClick={() => setIsOpen(!isOpen)} href="#about">
						About
					</MenuLink>
					<MenuLink onClick={() => setIsOpen(!isOpen)} href="#skills">
						Skills
					</MenuLink>
					<MenuLink
						onClick={() => setIsOpen(!isOpen)}
						href="#projects"
					>
						Projects
					</MenuLink>
					<MenuLink
						onClick={() => setIsOpen(!isOpen)}
						href="#contact"
					>
						Contact
					</MenuLink>
					<MenuLink onClick={() => setIsOpen(!isOpen)} href="#">
						Resume
					</MenuLink>
				</Menu>
			</Nav>
		</NavContainer>
	);
}

const Img = styled.img`
	height: 30px;
	width: 30px;
	margin: 5px;
`;

const Logo = styled.a`
	padding: 1rem 0;
	color: #0a192f;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.25rem;

	span {
		font-weight: 300;
		font-size: 1.3rem;
	}

	&:hover {
		color: #0a192f;
		text-decoration: none;
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;

	@media (max-width: 768px) {
		display: flex;
	}

	div {
		height: 3px;
		width: 30px;
		background: black;
		margin: 2px;
		border-radius: 5px;
		transition: all 0.3s ease-in;
		border-radius: 30%;

		&:nth-child(1) {
			transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "")};
		}

		&:nth-child(2) {
			transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "")};
		}
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
		transition: max-height 0.3s ease-in;
	}
`;

const MenuLink = styled.a`
	padding: 1rem 2rem;
	cursor: pointer;
	color: black;
	text-align: center;
	text-decoration: none;
	transition: all 0.3s ease-in;
	font-size: 0.9rem;
	transition: all 0.3s ease-in;

	&:hover {
		color: rebeccapurple;
		text-decoration: none;
	}
`;

const Nav = styled.header`
	overflow: hidden;
	position: fixed;
	top: 0px;
	z-index: 4;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: white;
	width: 100vw;
`;

const NavContainer = styled.div`
	height: 20vh;
`;

export default Navbar;
