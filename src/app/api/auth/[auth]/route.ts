import { handleAuth } from "@auth0/nextjs-auth0";

export async function GET() { 
	handleAuth() 
}