'use babel';

export default class AgarioView {

  constructor(serializedState) {
    this.element = document.createElement('iframe');
    this.element.classList.add('agar-atom');
    this.element.src="http://agar.io"
    this.element.width = "1024px"
    this.element.height = "768px"
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
