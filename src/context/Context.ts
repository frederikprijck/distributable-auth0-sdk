import {SDKEvents} from "./events";
import {SDKState} from "./state";

interface Context {
  events: SDKEvents;
  state: Partial<SDKState>
}

export default Context;
