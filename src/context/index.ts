import Context from "./Context";
import events from "./events";
import state from "./state";

const context: Context = {
  state,
  events
}

export type { Context };
export default context;
