import {jst}        from "jayesstee";

//
// Body - Handles all that is the body
//
export class Body extends jst.Component {
  constructor(app, width, height) {
    super();
    this.app           = app;
    this.width         = width;
    this.height        = height;
  }

  cssGlobal() {
    return {
      body: {
        fontFamily:      '"Helvetica Neue", Helvetica, Arial, sans-serif',
        color:           'black',
        backgroundColor: "white",
        background: 'linear-gradient(180deg, rgba(251,247,198,1) 0%, rgba(199,200,164,1) 100%)',
        padding$px:      0,
        margin$px:       0,
      },
      
      body$i: {
        height$px:    this.height,
        textAlign:    "center",
      },

      boardDiv$c: {
        display: "inline-block",
        margin: "auto"
      },

      '#body th': {
        textAlign: "left"
      }

    };
  }

  render() {
    return jst.$div(
      {
        id: "body",
        events: {
        },
      },
      "Hi!"
    );
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.refresh();
  }

  scrollTo(x, y) {
    window.scroll(x || 0, y || 0);
  }

}
