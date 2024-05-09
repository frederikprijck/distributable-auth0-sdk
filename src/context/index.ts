import Context from "./Context";
import events from "./events";
import state from "./state";
import {Auth0Client} from "@auth0/auth0-spa-js";

const context: Context = {
  state,
  events,
  auth: new Auth0Client({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    cacheLocation: 'localstorage',
    authorizationParams: {
      audience: 'myaccount:sdk',
      scope: [
        'profile:read',
        'profile:write'
      ].join(' '),
      redirect_uri: window.location.href
    }
  })
}

export type { Context };
export default context;
