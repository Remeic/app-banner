import Banner from './Banner';
import { useEffect,useState  } from 'preact/hooks';

function BannerManager() {
	const initialVisibilityBanner = getInitialStateVisibility;
	const [isBannerVisible, setBannerVisible] = useState(initialVisibilityBanner);
	 
	useEffect(() => {
		saveVisibleState(isBannerVisible);
	},[isBannerVisible]);
	
	return (isBannerVisible && <Banner dismiss={setBannerVisible} />);

	function saveVisibleState(visibility){
		window.localStorage.setItem('showAppBanner',visibility);
	}
}

function getInitialStateVisibility(){
	let visibility = window.localStorage.getItem('showAppBanner') || true;
	if (visibility === 'false') visibility = false;
	return visibility;
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