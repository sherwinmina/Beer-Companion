
import { FETCH_YEAST } from '../actions/types';

export default function(state  = [], action) {
  switch (action.type) {
    case FETCH_YEAST:
      return action.payload
  }
  return state;
}
