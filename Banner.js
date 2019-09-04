import {
	BannerWrapper,
	ImageWrapper,
	AppName,
	AppDescription,
	InstallButton
} from "./CustomComponents";

function Banner({children, ...props}) {
	return <BannerWrapper onClick={() => props.p(false)}>ciao</BannerWrapper>;
}

export default Banner;