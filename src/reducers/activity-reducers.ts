import { Activity } from "../types";

export type ActivityActions = {

    type: 'save-activity', payload: { newActivity : Activity }
};

type ActvityState = {
  activities: Activity[];
  auth:true;
};
export const initialState: ActvityState = {
    activities: [],
    auth: true
};

export const activityReducer = (
  state: ActvityState = initialState,
  action: ActivityActions
) => {

    if (action.type === 'save-activity') {
        //maneja la logica para actualizar el state
  return{
    ...state,
    activities: [...state.activities,  action.payload.newActivity ]
  }
        
    }
    return state
};
