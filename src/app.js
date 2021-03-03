import {jst}                   from "jayesstee";
import {Body}                  from "./body";

const DEBUG_MODE = false;

export class MainApp extends jst.Component {
  constructor(specs) {
    super();
    
    this.title              = "Hidden Artist";
    this.alerts             = [];
    this.brokerInfo         = undefined;
          
    this.width              = window.innerWidth;
    this.height             = window.innerHeight;

    this.debug              = DEBUG_MODE;


    this.body               = new Body(this, this.width, this.height, this.fontScale);
    //this.startPage          = new StartPage(this, this.width, this.height);

    // Listen for window resize events
    window.onresize = e => this.resize();

  }

  render() {
    return jst.$div(
      {id: "app"},
      this.body
    );
  }

  resize() {
    setTimeout(() => {
      this.width        = window.innerWidth;
      this.height       = window.innerHeight;
      //console.log(this.width, this.height);
      this.body.resize(this.width, this.height);
      this.refresh();
    }, 100);
  }

  getTitle() {
    return this.title;
  }


}

