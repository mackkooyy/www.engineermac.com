import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import './HeroStyling.css';

// https://www.youtube.com/watch?v=sKs9FiAHSN4 @ 1:08:22 !!!!!!!!

// https://leap-template.webflow.io/

const PageWrapper = styled.section`
	position: relative;
	min-height: 100vh;
`;

const HeroWrapper = styled.div`
	height: 100vh;
	position: relative;
	text-align: center;
	background: #dddddd;
	clear: both;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const HeroSlide = styled.div`
	position: relative;
	display: block;
	overflow: hidden;
	z-index: 1;
	left: 0;
	right: 0;
	height: 100%;
	white-space: nowrap;
	background-color: #000;
`;
const HeroSlider = styled.div`
	position: relative;
	display: inline-block;
	vertical-align: top;
	width: 100%;
	height: 100%;
	white-space: normal;
	text-align: left;
`;

const Slide = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: 0%;
	display: flex;
	overflow: hidden;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	-webkit-box-pack: end;
	justify-content: flex-end;
	-webkit-box-align: center;
	align-items: center;
`;

const HeroContent = styled.div`
	position: relative;
	z-index: 5;
	display: flex;
	margin-bottom: 20px;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	padding: 4vh 2vw;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 991px) {
		margin-bottom: 15vh;
	}

	p {
		align-self: center;
		margin-bottom: 1.2rem;
		font-size: 15px;
		line-height: 24px;
	}
`;

const TextWrapper = styled.div`
	overflow: hidden;

	h1 {
		margin-bottom: 1vw;
		padding-top: 8px;
		padding-bottom: 8px;
		font-size: 5vw;
		line-height: 5vw;
		font-weight: 700;
		margin-top: 0;
		display: block;
		margin-block-start: 0.83rem;
		margin-block-end: 0.83rem;
		margin-inline-start: 0px;
		margin-inline-end: 0px;

		@media screen and (max-width: 991px) {
			font-size: 7vw;
		}
	}
`;

const SlideNumbers = styled.div`
	position: relative;
	z-index: 5;
	overflow: hidden;
	display: flex;
	margin-bottom: 40px;
	justify-content: center;
	align-items: center;
	font-size: 13px;
	line-height: 16px;

	@media screen and (max-width: 991px) {
		display: none;
	}
`;

const SlideNumber = styled.div`
	display: flex;
	width: 20px;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	letter-spacing: 1px;
`;

const SlideNumberDivider = styled.div`
	width: 1px;
	height: 24px;
	margin-right: 10px;
	margin-left: 10px;
	background-color: #fff;
`;

const SlideNumberAll = styled.div`
	display: flex;
	width: 20px;
	justify-content: center;
	align-items: center;
	font-weight: 500;
	letter-spacing: 1px;
`;

const SliderButtonLeft = styled.div`
	position: absolute;
	z-index: 2;
	right: 76px;
	left: auto;
	top: auto;
	bottom: 24px;
	width: 56px;
	height: 56px;
	border-style: solid;
	border-width: 2px;
	border-color: hsla(0, 0%, 100%, 0);
	border-radius: 50%;
	transition: color 600ms ease, background-color 600ms ease,
		border-color 600ms ease;
	font-size: 22px;
	color: #fff;

	@media screen and (max-width: 991px) {
		position: fixed;
		left: 0%;
		top: 50%;
		right: auto;
		bottom: 0%;
		width: 64px;
		height: 64px;
	}

	&:hover {
		background-color: #fff;
		color: #161719;
	}
`;
const SliderButtonRight = styled.div`
	position: fixed;
	z-index: 2;
	right: 20px;
	left: auto;
	top: auto;
	bottom: 24px;
	width: 56px;
	height: 56px;
	border-style: solid;
	border-width: 2px;
	border-color: hsla(0, 0%, 100%, 0);
	border-radius: 50%;
	transition: color 600ms ease, background-color 600ms ease,
		border-color 600ms ease;
	font-size: 22px;
	color: #fff;

	@media screen and (max-width: 991px) {
		position: fixed;
		left: auto;
		top: 50%;
		right: 0%;
		bottom: 0%;
		width: 64px;
		height: 64px;
	}
	&:hover {
		background-color: #fff;
		color: #161719;
	}
`;

const PrevArrow = styled(RiArrowLeftSLine)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 1.7em;
	height: 1.7em;
`;

const NextArrow = styled(RiArrowRightSLine)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	width: 1.7em;
	height: 1.7em;
`;

const Follow = styled.div`
	position: fixed;
	left: 20px;
	top: auto;
	right: auto;
	bottom: 20px;
	z-index: 5;
	display: flex;
	padding: 20px 20px 8px;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	flex-direction: column;
	-webkit-box-align: start;
	align-items: flex-start;

	@media screen and (max-width: 767px) {
		left: 0%;
		top: auto;
		right: 0%;
		bottom: 0%;
		margin-right: auto;
		margin-left: auto;
	}
	@media screen and (max-width: 991px) {
		padding-right: 16px;
		padding-bottom: 20px;
		padding-left: 16px;
		left: 0%;
		top: auto;
		right: 0%;
		bottom: 0%;
		margin-right: auto;
		margin-left: auto;
	}
`;

const FollowButton = styled.div`
	display: flex;
	padding-top: 12px;
	padding-bottom: 12px;
	-webkit-box-align: center;
	align-items: center;

	@media screen and (max-width: 991px) {
		display: none;
		margin-right: auto;
		margin-left: auto;
	}
`;

const FollowLinks = styled.div`
	display: flex;
	margin-left: -12px;
	flex-wrap: wrap;
	-webkit-box-align: center;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 991px) {
		margin-right: auto;
		margin-left: auto;
		padding-top: 16px;
		padding-bottom: 16px;
	}
`;

const Twitter = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #00acee;
		}
	}
`;

const Facebook = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #3b5998;
		}
	}
`;

const Instagram = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #cd486b;
		}
	}
`;

const Youtube = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #c4302b;
		}
	}
`;

const LinkedIn = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #0e76a8;
		}
	}
`;

const GitLab = styled.div`
	a {
		display: flex;
		width: 48px;
		height: 48px;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		border-style: solid;
		border-width: 2px;
		border-color: hsla(0, 0%, 100%, 0);
		border-radius: 50%;
		transition: color 600ms ease, background-color 600ms ease,
			border-color 600ms ease;
		color: #fff;
		font-weight: 600;
		text-align: center;
		text-decoration: none;

		&:hover {
			background-color: #e24329;
		}
	}
`;

const FollowIconWrapper = styled.div`
	width: 38px;
	opacity: 1;
	height: 26px;

	@media screen and (max-width: 991px) {
		display: none;
	}
`;

const FollowIcon = styled.div`
	position: relative;
	display: flex;
	width: 26px;
	height: 26px;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	border-radius: 50%;
	background-color: #fff;
`;

const FollowIconLine = styled.div`
	position: absolute;
	width: 12px;
	height: 2px;
	background-color: #161719;
`;

const FollowIconLineVertical = styled.div`
	width: 2px;
	height: 12px;
	position: absolute;
	background-color: #161719;
`;

const FollowText = styled.div`
	font-size: 12px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.5px;
	text-transform: uppercase;
`;

const Hero = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	// const timeout = useRef(null);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	return (
		<PageWrapper>
			<HeroWrapper>
				{slides.map((slide, index) => {
					return (
						<HeroSlide key={index}>
							<HeroSlider>
								<Slide>
									<HeroContent>
										<TextWrapper>
											<h1>{slide.title}</h1>
										</TextWrapper>
										<p>{slide.description}</p>
									</HeroContent>
									<SlideNumbers>
										<SlideNumber>{slide.page}</SlideNumber>
										<SlideNumberDivider></SlideNumberDivider>
										<SlideNumberAll>06</SlideNumberAll>
									</SlideNumbers>
									<img
										src={slide.image}
										alt={slide.alt}
										sizes='100vw'
										class='bg-image'
									/>
								</Slide>
							</HeroSlider>
						</HeroSlide>
					);
				})}
				<SliderButtonLeft>
					<PrevArrow />
				</SliderButtonLeft>
				<SliderButtonRight>
					<NextArrow onClick={nextSlide} />
				</SliderButtonRight>
			</HeroWrapper>
			<Follow>
				<FollowButton>
					<FollowIconWrapper>
						<FollowIcon>
							<FollowIconLine></FollowIconLine>
							<FollowIconLineVertical></FollowIconLineVertical>
						</FollowIcon>
					</FollowIconWrapper>
					<FollowText>Follow</FollowText>
				</FollowButton>
				<FollowLinks>
					<Twitter>
						<a
							href='//twitter.com/mackkooyy'
							target={'_blank'}
							rel='noreferrer'
							aria-label='Twitter'>
							<FaTwitter />
						</a>
					</Twitter>
					<Facebook>
						<a
							href='//www.facebook.com/engrmac16'
							target='_blank'
							rel='noreferrer'
							aria-label='Facebook'>
							<FaFacebook />{' '}
						</a>
					</Facebook>
					<Instagram>
						<a
							href='//www.instagram.com/mackkooyy/'
							target='_blank'
							rel='noreferrer'
							aria-label='Instagram'>
							<FaInstagram />
						</a>
					</Instagram>
					<Youtube>
						<a
							href='//www.youtube.com/channel/UCQp0zILzRnROfqFFNL7y2Wg'
							target='_blank'
							rel='noreferrer'
							aria-label='Youtube'>
							<FaYoutube />
						</a>
					</Youtube>
					<LinkedIn>
						<a
							href='//www.linkedin.com/in/engrmacvillanueva/'
							target='_blank'
							rel='noreferrer'
							aria-label='Linkedin'>
							<FaLinkedin />
						</a>
					</LinkedIn>
					<GitLab>
						<a
							href='//gitlab.com/Mackkooyy/www.engineermac.com'
							target='_blank'
							rel='noreferrer'
							aria-label='GitLab'>
							<SiGitlab />
						</a>
					</GitLab>
				</FollowLinks>
			</Follow>
		</PageWrapper>
	);
};

export default Hero;
