import { combineReducers, Reducer } from "redux";
import { RootState } from "./state";
import dashboardReducer from "ducks/op";
import Axios from "axios";

export { RootState };

export interface Action {
  type: string;
  payload: any;
}

export const reducers: Reducer<RootState> = combineReducers<RootState>({
  dashboard: dashboardReducer
});

export const rootReducer = (state: RootState, action: any) => {
  if (action.type === "authentication.logout") {
    state = {} as any;
  }

  return reducers(state, action);
};

Axios.defaults.headers = {
  "Content-Type": "application/json"
};

export type Error = any;
