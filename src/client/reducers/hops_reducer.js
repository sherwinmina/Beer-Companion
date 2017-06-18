import { FETCH_HOPS } from '../actions/types';

export default function(state  = [], action) {
  switch (action.type) {
    case FETCH_HOPS:
      return [ action.payload.id ]
  }
  return state;
}
