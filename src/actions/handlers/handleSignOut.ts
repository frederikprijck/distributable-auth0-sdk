import {ActionHandler, SDKActions} from "../sdkActions";

const handleSignOut: ActionHandler<SDKActions['signOut']> = (context) => async () => {
  try {
    await context.auth.logout({
      logoutParams: {
        returnTo: window.location.href
      }
    });
    context.events.signOut.emit({ success: true });
  } catch (e) {
    context.events.signOut.emit({success: false, error: e.message});
  }
}

export default handleSignOut;
