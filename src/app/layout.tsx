import './globals.css'
import dynamic from "next/dynamic";
import { Metadata } from "next"
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { sans } from "~/lib/fonts";

const PreviewProvider = dynamic(() => import('~/components/PreviewProvider'))

export const metadata: Metadata = {
	title: 'Home',
	description: "test"
}

interface LayoutProps {
	children: React.ReactNode;
	draftMode: boolean;
	token: string;
}

export default function RootLayout({
	children,
	draftMode,
	token
}: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${sans.className}`}>
				<UserProvider>
					{draftMode ? (
						<PreviewProvider token={token}>
							{children}
						</PreviewProvider>
					) : (
						children
					)}
				</UserProvider>
			</body>
		</html >
	)
}