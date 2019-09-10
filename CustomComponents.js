import { styled } from 'goober';


const BannerWrapper = styled('div')`
  position: fixed;
  padding: 1rem 1rem 0.5rem;
  display: block;
  width: 100vw;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  bottom: 0;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Helvetica Neue", Arial, sans-serif;
`;


const InformationWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const ImageWrapper = styled('figure')`
  padding: 0.1rem;
  width: auto;
  height: auto;
  margin: 0px;
`;

const AppName = styled('h2')`
  font-size: 24px;
`;

const AppDescription = styled('p')`
  font-size: 14px;
`;

const AppContent = styled('div')`
  padding-left: 1.5rem;
`;


const InstallButton = styled('a')`
  border: none;
  background-color: #42A5F5;
  color: white;
  padding: 0 16px;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 36px;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  width: 100%;
  font-size: 0.8em;
  margin-top: 0.5rem;
  text-decoration: none;
  display: block;
`;


const DismissButton = styled('button')`
   position: absolute;
  right: 0.5rem;
  top: 0px;
  width: 16px;
  height: 16px;
  opacity: 0.3;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 16px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

`;

export {
	BannerWrapper,
	ImageWrapper,
	AppName,
	AppDescription,
	InstallButton,
	InformationWrapper,
	AppContent,
	DismissButton
};