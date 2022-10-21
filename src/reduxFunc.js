import { createStore } from "redux";

export let activeUser = createStore((state = {}, action) => {
  switch (action.type) {
    case "update":
      return action.item;
    case "clear":
      return {};
    default:
      return state;
  }
});