import {Context} from "../context";
import {SDKActions} from "./sdkActions";
import handleSignOut from "./handlers/handleSignOut";
import handleSignIn from "./handlers/handleSignIn";

export const getSdkActions = (context: Context): SDKActions => ({
  signOut: handleSignOut(context),
  signIn: handleSignIn(context)
})

export type {SDKActions};
