'use babel';

import AgarioView from './agario-view';
import { CompositeDisposable } from 'atom';

export default {

  agarioView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.agarioView = new AgarioView(state.agarioViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.agarioView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'agario:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.agarioView.destroy();
  },

  serialize() {
    return {
      agarioViewState: this.agarioView.serialize()
    };
  },

  toggle() {
    console.log('Agario was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
