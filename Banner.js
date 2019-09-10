import { h } from 'preact';
import {setPragma } from 'goober';
import './style.css';
setPragma(h);

import {
	BannerWrapper,
	ImageWrapper,
	AppName,
	AppDescription,
	InstallButton,
	InformationWrapper,
	AppContent,
	DismissButton
} from './CustomComponents';

function Banner({ children, ...props }) {
	return (<BannerWrapper >
		<InformationWrapper>
			<ImageWrapper>
				<img src={props.content.image} className="banner__icon" />
			</ImageWrapper>
			<AppContent>
				<AppName>{props.content.appName}</AppName>
				<AppDescription>{props.content.smallDescription}</AppDescription>
			</AppContent>
			<DismissButton onClick={() => props.dismiss(false)} />
		</InformationWrapper>
		<InstallButton href={chooseCorrectLink(props.content.iosLink,props.content.androidLink)}>{props.content.installTextButton}</InstallButton>
	</BannerWrapper>);
}

function getMobileOperatingSystem() {
	let result;
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgent)) {
		result = 'android';
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		result = 'ios';
	}
	return result;
}

function chooseCorrectLink(iosLink, androidLink) {
	let result;
	switch (getMobileOperatingSystem()) {
		case 'android':
			result = androidLink;
			break;
		case 'ios':
			result = iosLink;
			break;
		default:
			break;
	}
	return result;
}

export default Banner;