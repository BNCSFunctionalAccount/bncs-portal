import { IBM_Plex_Mono, Inter, PT_Serif } from "next/font/google";

export const mono = IBM_Plex_Mono({
	variable: '--font-family-mono',
	subsets: ['latin'],
	weight: ['500', '700'],
  });

 export const sans = Inter({
	variable: '--font-family-sans',
	subsets: ['latin'],
	weight: ['500', '700', '800'],
  });

export  const serif = PT_Serif({
	variable: '--font-family-serif',
	style: ['normal', 'italic'],
	subsets: ['latin'],
	weight: ['400', '700'],
  });