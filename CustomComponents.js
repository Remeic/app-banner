import { h } from "preact";
import { styled, setPragma } from "goober";
setPragma(h);

const BannerWrapper = styled("div")`
  position: fixed;
  padding: 1rem 1rem;
  display: flex;
  width: 100vw;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  bottom: 0;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
`;

const ImageWrapper = styled("figure")`
  padding: 0.1rem;
  width: 32px;
  height: 32px;
  margin: 0px;
`;

const AppName = styled("h2")`
  font-size: 24px;
`;

const AppDescription = styled("p")`
  font-size: 14px;
`;

const InstallButton = styled("button")`
  border: none;
  background: white;
  color: black;
`;

export {
	BannerWrapper,
	ImageWrapper,
	AppName,
	AppDescription,
	InstallButton
};