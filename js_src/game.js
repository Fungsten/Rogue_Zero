import ROT from 'rot-js';
import * as U from './util.js';
import {Message} from './message.js';

export let Game = {

  messageHandler: Message,

  _DISPLAY_SPACING: 1.1,
  _display: {
    main: {
      w: 80,
      h: 24,
      o: null
    },
    avatar: {
      w: 20,
      h: 24,
      o: null
    },
    message: {
      w: 100,
      h: 6,
      o: null
    }
  },

  init: function() {
    this._randomSeed = 5 + Math.floor(Math.random()*100000);
    //this._randomSeed = 76250;
    console.log("using random seed "+this._randomSeed);
    ROT.RNG.setSeed(this._randomSeed);

    for (var display_key in this._display) {
      this._display[display_key].o = new ROT.Display({
        width: this._display[display_key].w,
        height: this._display[display_key].h,
        spacing: this._DISPLAY_SPACING});
    }
  
    this.messageHandler.init(this.getDisplay('message'));
    // this.display.main.o = new ROT.Display({
    //   width: this.display.main.w,
    //   height: this.display.main.h,
    //   spacing: this.display.SPACING});
  },

  getDisplay: function (displayId) {
    if (this._display.hasOwnProperty(displayId)) {
      return this._display[displayId].o;
    }
    return null;
  },

  render: function() {
    this.renderDisplayAvatar();
    this.renderDisplayMain();
    this.renderDisplayMessage();
  },

  renderDisplayAvatar: function() {
    let d = this._display.avatar.o;
    for (let i = 0; i < 10; i++) {
      d.drawText(5,i+5,"avatar");
    }
  },

  renderDisplayMain: function() {
    let d = this._display.main.o;
    for (let i = 0; i < 10; i++) {
      d.drawText(5,i+5,"main");
    }
  },
  
  renderDisplayMessage: function() {
    this.messageHandler.render();
  }
  
};