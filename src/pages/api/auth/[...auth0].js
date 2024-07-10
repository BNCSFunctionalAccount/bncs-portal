import { handleAuth } from '@auth0/nextjs-auth0';
import { InitAuth0 } from '@auth0/nextjs-auth0';

export default handleAuth(
    {
        scope: 'openid profile email' 
    }
);

