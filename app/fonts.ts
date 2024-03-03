import { Kaushan_Script, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const kaushanScript = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
