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
	0: '#161b22',
	1: '#016001',
	2: '#028102',
	3: '#03a203',
	4: '#04c304',
	5: '#05e305',
	6: '#12f912',
	7: '#33f933',
	8: '#55fa55',
	9: '#76fa76',
	10: '#97fb97'
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
