import { Context } from '../context';

export interface SDKActions {
  signIn: (args: {isSilent: boolean}) => Promise<void>;
  signOut: () => Promise<void>;
}

export interface ActionHandler<Func> {
  (context: Context): Func
}
