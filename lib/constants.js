import { Bodoni_Moda, Urbanist } from "@next/font/google";

export const kPrimaryFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});
export const kSecondaryFont = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const kGithubColorCode = {
  "#ebedf0": "#161b22",
  "#9be9a8": "#0e4429",
  "#40c463": "#006d32",
  "#40c463": "#26a641",
  "#30a14e": "#39d353",
};

export const kViewGeneratedGraph = "View Generated Graph";
export const kEnterImmersiveView = "Enter Immersive View";
