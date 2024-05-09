import {SDKEvents} from "./events";
import {SDKState} from "./state";
import {Auth0Client} from "@auth0/auth0-spa-js";

interface Context {
  events: SDKEvents;
  state: Partial<SDKState>
  auth: Auth0Client;
}

export default Context;
