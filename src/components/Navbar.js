import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './NavbarStyling.css';

// https://www.youtube.com/watch?v=sKs9FiAHSN4 !!!!!!!!!!!!

const Nav = styled.nav`
	position: fixed;
	left: 0px;
	top: 0px;
	right: 0px;
	z-index: 100;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	height: 112px;
	-webkit-box-pack: justify;
	-webkit-justify-content: space-between;
	justify-content: space-between;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	background-color: transparent;
	color: #fff;
`;

const Navigation = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	height: 100%;
	padding-right: 24px;
	padding-left: 20px;
	justify-content: flex-end;
	align-items: center;
	-ms-flex: 1;
	flex: 1;

	@media screen and (max-width: 991px) {
		padding-right: 8px;
	}
	@media screen and (max-width: 767px) {
		padding-right: 0px;
	}
	@media screen and (max-width: 479px) {
		padding-right: 0px;
	}
`;

const NavBtn = styled.div`
	position: relative;
	z-index: 101;
	display: flex;
	padding-right: 16px;
	padding-left: 16px;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 991px) {
		padding-right: 8px;
		padding-left: 8px;
	}

	@media screen and (max-width: 767px) {
		padding-right: 0px;
		padding-left: 0px;
	}
`;

const Button = styled(Link)`
	display: flex;
	height: 48px;
	padding: 12px 28px;
	align-items: center;
	justify-content: center;
	border-style: none;
	border-radius: 24px;
	background-color: transparent;
	background-image: none;
	box-shadow: inset 0 0 0 2px #fff;
	transition: box-shadow 600ms ease, box-shadow 600ms ease,
		border-color 600ms ease, color 600ms ease, background-color 600ms ease;
	color: #fff;
	font-size: 15px;
	line-height: 20px;
	font-weight: 600;
	text-align: center;
	text-decoration: none;
	border: 0;
	cursor: pointer;
	transition: 0.5s;

	@media screen and (max-width: 485px) {
		height: 40px;
		padding-right: 24px;
		padding-left: 24px;
		font-size: 13px;
	}

	&:hover {
		transform: scale(0.95);
		background: #fff;
		color: #161719;
	}
`;

const MenuBtn = styled.div`
	display: block;
	z-index: 10;
	width: 56px;
	height: 56px;
	padding: 15px 16px;
	border-radius: 50%;
	color: #fff;
	font-weight: 700;
	position: relative;
	float: right;
	font-size: 24px;
	cursor: pointer;

	@media screen and (max-width: 991px) {
		width: 56px;
		height: 56px;
		padding: 15px 16px;
	}
`;

const MenuIcon = styled.div`
	width: 24px;
	padding-top: 8px;
	padding-bottom: 8px;
	float: right;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
`;

const MenuIconLineTop = styled.div`
	height: 2px;
	margin-bottom: 6px;
	background-color: #fff;
`;
const MenuIconLineBottom = styled.div`
	height: 2px;
	background-color: #fff;
`;

const Navbar = () => {
	return (
		<Nav>
			<a href='/' className='brand'>
				<img
					src={require('../images/MacLogo.svg').default}
					alt='logo'
					className='logo'
				/>
				<div className='logo-info'>
					<div className='logo-text'>Mac Villanueva</div>
					<div className='logo-description'>DevOps Engineer</div>
				</div>
			</a>
			<Navigation>
				<NavBtn>
					<Button to='/hire'>Hire Me</Button>
				</NavBtn>
				<MenuBtn>
					<MenuIcon>
						<MenuIconLineTop />
						<MenuIconLineBottom />
					</MenuIcon>
				</MenuBtn>
			</Navigation>
		</Nav>
	);
};

export default Navbar;
