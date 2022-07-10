import { SingleShoes } from "./types/Shoes";

const eventBus = {
    on(event: string, callback: CallableFunction) {
      document.addEventListener(event, (e: Event) => callback((<CustomEvent>e).detail));
    },
    dispatch(event: string, data: SingleShoes) {
      document.dispatchEvent(new CustomEvent(event, { detail: data }));

    },
    remove(event: string, callback: CallableFunction) {
      console.log('Removed')
      document.removeEventListener(event, (e: Event) => callback((<CustomEvent>e).detail));
    },
  };
  
  export default eventBus;