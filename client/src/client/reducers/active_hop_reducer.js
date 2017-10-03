import { HOP_SELECTED } from '../actions/types'

export default function(state = null, action) {
  switch(action.type) {
    case HOP_SELECTED:
      return action.payload;
  }

  return state;
}