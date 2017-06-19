import data from '../../../data/hops.json';



export default function() {
  console.log(JSON.parse(data))
  return [
   hops
  ]
}

console.log(data)


// export default function(state  = [], action) {
//   switch (action.type) {
//     case FETCH_HOPS:
//       return [ action.payload ]
//   }
//   return state;
// }
