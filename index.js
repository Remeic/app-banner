import './style.css';
import { Component,h } from 'preact';
import { styled, setPragma } from "goober";
setPragma(h);
import { options } from './banner-option';

const Banner = styled('div')`
  position: ${options.banner.position};
	padding: 1rem 1rem;
	display:flex;
	width: 100vw;
	align-items: center;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	bottom: 0;
	justify-content: space-between;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
`;

const ImageWrapper = styled('figure')`
	padding: 0.1rem;
	width: ${options.image.size};
	height: ${options.image.size};
	margin: 0px;
`;

const AppName = styled('h2')`
	font-size: 24px;
`;

const AppDescription = styled('p')`
	font-size: 14px;
`;

const InstallButton = styled('button')`
	border: none;
	background: white;
	color: black;
`;


export default function App(){
	return (
		<Banner>
			<ImageWrapper>
				<img src={options.image.src} className="banner__icon" />
			</ImageWrapper>
			<div>
				<AppName>App Banner Preact</AppName>
				<AppDescription>Piccola descrizione</AppDescription>
			</div>
			<InstallButton>Installa</InstallButton>
		</Banner>
	);
}
