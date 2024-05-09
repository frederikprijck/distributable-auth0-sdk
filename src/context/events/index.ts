import SDKEvents from "./sdkEvents";
import {createEventHandler} from "./eventHandler";

const events: SDKEvents = {
  signIn: createEventHandler("SIGN_IN_EVENT"),
  signOut: createEventHandler("SIGN_OUT_EVENT")
}

export type { SDKEvents };
export default events;
