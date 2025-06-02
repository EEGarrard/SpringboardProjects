import store from "./store.js";
import { bugAdded, bugResolved } from "./actions.js";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// store.dispatch({
 
// });

// unsubscribe()

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1))

console.log(store.getState());
