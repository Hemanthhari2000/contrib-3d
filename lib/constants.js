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
  0: "#161b22",
  1: "#0e4429",
  2: "#006d32",
  3: "#26a641",
  4: "#39d353",
};
