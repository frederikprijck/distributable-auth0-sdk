import {Context} from "../context";
import {SDKActions} from "./sdkActions";
import handleSignOut from "./handlers/handleSignOut";
import handleSignIn from "./handlers/handleSignIn";
import handleRedirectCallback from "./handlers/handleRedirectCallback";

export const getSdkActions = (context: Context): SDKActions => ({
  signOut: handleSignOut(context),
  signIn: handleSignIn(context),
  handleRedirectCallback: handleRedirectCallback(context),
})

export type {SDKActions};
