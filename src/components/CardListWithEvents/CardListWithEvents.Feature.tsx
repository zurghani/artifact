import ReactDOM from "react-dom";
import CardList from "./CardListWithEvents";

export default class CardListWithEventsElement extends HTMLElement {
  // Attach a shadow DOM (optional)
  private shadowRootInstance: ShadowRoot | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRootInstance = this.shadowRoot;
  }

  // Called when the element is inserted into the DOM
  connectedCallback() {
    this.render();
  }

  // Watch for changes to specific attributes
  static get observedAttributes() {
    return ["cards"];
  }

  // Called when an observed attribute changes
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "cards" && oldValue !== newValue) {
      this.render();
    }
  }

  // Rendering React component
  private render() {
    const cards = this.getAttribute("cards");
    const parsedCards = cards ? JSON.parse(cards) : [];

    // Render the React component into the shadow DOM
    ReactDOM.render(<CardList />, this.shadowRootInstance);
  }

  // Called when the element is removed from the DOM
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.shadowRootInstance as ShadowRoot);
  }
}

// Register the custom element
customElements.define("card-list-events", CardListWithEventsElement);

// Key Methods in HTMLElement
// connectedCallback: Called when the custom element is added to the DOM.
//     - Use this to render the React component.
// attributeChangedCallback: Called whenever an observed attribute changes.
//     - Useful for dynamic updates based on prop changes.
// disconnectedCallback: Called when the element is removed from the DOM.
//     - Use this to clean up (e.g., unmount React components).

// You can look into other libraries such : react-to-webcomponent
