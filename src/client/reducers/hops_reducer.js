import { data } from '../../../data/hops.js';
import { FETCH_HOPS } from '../actions/types';



export default function(state = data, action) {
  console.log('Action Recieved', action)
  
  return state;
}


// export default function(state  = null, action) {
//   switch (action.type) {
//     case FETCH_HOPS:
//       return data
//   }
//   return state;
// }
