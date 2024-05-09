type UnsubscribeFunc = () => void;

export interface EventHandler<Data> {
  emit: (data?: Data) => void;
  connect: (callback: (data?: Data) => void) => UnsubscribeFunc;
}

// Relies on Custom Event API built into most browsers
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
export const createEventHandler = <T>(eventName: string): EventHandler<T> => {
  return  {
    emit: (data) => document.dispatchEvent(new CustomEvent(eventName, { detail: data })),
    connect: (callback) => {
      const connectionHandler = (event: CustomEvent<T>) => {
        callback(event.detail);
      };
      document.addEventListener(eventName, connectionHandler);
      return () => {
        document.removeEventListener(eventName, connectionHandler);
      };
    },
  };
};
