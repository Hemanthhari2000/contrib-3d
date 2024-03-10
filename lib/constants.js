import { Bodoni_Moda, Urbanist } from '@next/font/google';

export const kPrimaryFont = Bodoni_Moda({
	subsets: ['latin'],
	variable: '--font-bodoni-moda'
});
export const kSecondaryFont = Urbanist({
	subsets: ['latin'],
	variable: '--font-urbanist'
});

export const kGithubColorCode = {
	'#ebedf0': '#161b22',
	'#9be9a8': '#0e4429',
	'#40c463': '#006d32',
	'#40c462': '#26a641',
	'#30a14e': '#39d353'
};

export const kTextLogoText = 'Contrib 3D';
export const kTextHomePageIntroText = 'Your Github Contribution Graph in 3D';
export const kTextHomePageInputPlaceholder = 'github-username';
export const kTextHomePageInputErrorMessage = 'Github Handle is Required.';
export const kTextViewGeneratedGraph = 'View Generated Graph';
export const kTextEnterImmersiveView = 'Enter Immersive View';
export const kTextImmersiveViewOverlayHeading = 'Immersive View';
export const kTextOverlayEnterViewBtn = 'Enter View';
export const kTextOverlayBackBtn = 'Back';
export const kTextUserCannotBeFound =
	'User Cannot be found, Please check your github handle.';
