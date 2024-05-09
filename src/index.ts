import createSdk, {SDK} from "./sdk";
import context from "./context";

declare global {
  interface Window {
    AccountSDK: SDK
  }
}

window.AccountSDK = createSdk(context);

// Silently fetch session when SDK loaded on page
const readyStateCheckInterval = setInterval(() => {
  if(document.readyState === 'complete') {
    clearInterval(readyStateCheckInterval);
    window.AccountSDK.actions.signIn({isSilent: true}).then(() => {
      document.dispatchEvent(new CustomEvent('SDKReady'));
    })
  }
})
