import {ActionHandler, SDKActions} from "../sdkActions";
import {Context} from "../../context";

const fetchAccessToken = async (context: Context): Promise<string | undefined> => {
  try {
    return await context.auth.getTokenSilently();
  } catch (e) {
    return undefined;
  }
}

const handleSignIn: ActionHandler<SDKActions['signIn']> = (context) => async (args = {}) => {
  const {isSilent} = args;
  const accessToken = await fetchAccessToken(context);
  try {
    if (!accessToken && !isSilent) {
      await context.auth.loginWithRedirect();
      return;
    }
    context.state.accessToken = accessToken;
    context.state.isAuthenticated = accessToken !== undefined;
    context.events.signIn.emit({isAuthenticated: context.state.isAuthenticated, accessToken});
  } catch (e) {
    context.state.isAuthenticated = false;
    context.events.signIn.emit({isAuthenticated: false});
  }
}

export default handleSignIn;
