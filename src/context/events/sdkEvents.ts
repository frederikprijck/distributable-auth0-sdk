import {EventHandler} from "./eventHandler";

interface SDKEvents {
  signIn: EventHandler<{isAuthenticated: boolean, accessToken?: string, error?: string}>
  signOut: EventHandler<{success: boolean, error?: string}>
}

export default SDKEvents;
