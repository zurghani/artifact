function eventSubscribe(eventName: string, listener: (evt: any) => void) {
  window.addEventListener(eventName, listener);
}
function eventUnsubscribe(eventName: string, listener: (evt: any) => void) {
  window.removeEventListener(eventName, listener);
}

//============

function publish(eventName: string, data: any, isComposed = true) {
  const event = new CustomEvent(eventName, {
    detail: data,
    composed: isComposed,
  });
  window.dispatchEvent(event);
}

function eventDispatch(eventName: string, data: any = {}) {
  publish(eventName, data);
}

export { eventDispatch, eventSubscribe, eventUnsubscribe };
