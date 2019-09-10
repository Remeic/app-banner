import Banner from './Banner';
import { useEffect,useState  } from 'preact/hooks';

function BannerManager({ children, ...props }) {
	const initialVisibilityBanner = getInitialStateVisibility;
	const [isBannerVisible, setBannerVisible] = useState(initialVisibilityBanner);
	 
	useEffect(() => {
		saveVisibleState(isBannerVisible);
	},[isBannerVisible]);
	
	return (isBannerVisible && <Banner dismiss={setBannerVisible} content={props.content}/>);

	function saveVisibleState(visibility){
		window.localStorage.setItem('showAppBanner',visibility);
	}
}

function getInitialStateVisibility(){
	let visibility = window.localStorage.getItem('showAppBanner') || true;
	if (visibility === 'false') visibility = false;
	return visibility;
}

export default BannerManager;