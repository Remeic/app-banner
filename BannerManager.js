import Banner from './Banner';
import { h } from 'preact';
import { useEffect,useState  } from "preact/hooks";

function BannerManager() {
	const [isBannerVisible, setBannerVisible] = useState(false);
	useEffect(() => {
		checkIfShowBanner();
		console.log(isBannerVisible);
	},[isBannerVisible]);
	
	return (isBannerVisible && <Banner p={setBannerVisible} />);

	function checkIfShowBanner(){
		let appBannerSettings = () => window.localStorage.getItem('showAppBanner');
		setBannerVisible(appBannerSettings);
		console.log(isBannerVisible)
		console.log("ldldld")
	}
}



function getMobileOperatingSystem() {
	let result;
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	if (/android/i.test(userAgent)) {
		result = "android";
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		result = "ios";
	}
	return result;
}

function chooseCorrectLink(iosLink, androidLink) {
	let result;
	switch (getMobileOperatingSystem()) {
		case "android":
			result = androidLink;
			break;
		case "ios":
			result = iosLink;
			break;
		default:
			break;
	}
	return result;
}

export {BannerManager} ;