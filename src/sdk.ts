import {SDKState} from "./context/state";
import {getSdkActions, SDKActions} from "./actions";
import {SDKEvents} from "./context/events";
import {Context} from "./context";

export interface SDK {
  getState: () => Partial<SDKState>;
  actions: SDKActions;
  events: SDKEvents;
}

const createSdk = (context: Context): SDK => ({
  getState: () => JSON.parse(JSON.stringify(context.state)),
  actions: getSdkActions(context),
  events: context.events
})

export default createSdk;
