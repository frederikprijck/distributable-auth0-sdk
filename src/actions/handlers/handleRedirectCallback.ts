import { ActionHandler, SDKActions } from "../sdkActions";
import { Context } from "../../context";

const fetchAccessToken = async (
  context: Context
): Promise<string | undefined> => {
  try {
    return await context.auth.getTokenSilently();
  } catch (e) {
    return undefined;
  }
};

const handleRedirectCallback: ActionHandler<
  SDKActions["handleRedirectCallback"]
> =
  (context) =>
  async (args = {}) => {
    try {
      if (
        window.location.search.includes("state=") &&
        (window.location.search.includes("code=") ||
          window.location.search.includes("error="))
      ) {
        await context.auth.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
      }
      const accessToken = await fetchAccessToken(context);
      context.state.accessToken = accessToken;
      context.state.isAuthenticated = accessToken !== undefined;
      context.events.signIn.emit({
        isAuthenticated: context.state.isAuthenticated,
        accessToken,
      });
    } catch (e) {
      context.state.isAuthenticated = false;
      context.events.signIn.emit({ isAuthenticated: false });
    }
  };

export default handleRedirectCallback;
