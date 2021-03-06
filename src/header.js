import {jst}        from "jayesstee";

//
// Header 
//

const ICON_SIZE = 40;

export class Header extends jst.Component {
  constructor(app, width, height) {
    super();
    this.app           = app;

    this.resize(width, height);
  }

  cssLocal() {
    return {
      header$i: {
        width: '100%'
      },
      iconDiv$c: {
        display: 'inline-block',
        margin$pt: [5, 5, 0, 5],
        width$pt: ICON_SIZE,
        height$pt: ICON_SIZE,
        borderRadius$pt: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        border$px: [1, 'solid', jst.rgba(0,0,0,0.3)],
        boxShadow$px: [0, 1, 5, jst.rgba(0,0,0,0.5)]
      },
      icon$c: {
        width$pt: ICON_SIZE,
        height$pt: ICON_SIZE
      },
      name$c: {
        display: 'inline-block',
        fontSize: '200%',
        verticalAlign: 'bottom',
        margin$pt: [10, 10]
      },
      navBox$c: {
        display: 'inline-block',
        float: 'right',
        marginBottom$pt: 15
      },
      navItem$c: {
        display: 'inline-block',
        margin$pt: [10, 15, 0, 15],
        cursor: 'pointer'
      },
      navItem$hover$c: {
        color: '#3333dd'
      }
    };
  }

  render() {
    return jst.$div(
      {id: "header"},
      jst.$div({cn: '-iconDiv', events: {click: e => this.navigate('home')}},
        jst.$img({cn: '-icon', src: 'img/icon.png'}),
      ),
      jst.$div({cn: '-name'}, "Hidden Artist"),
      jst.$div({cn: '-navBox'},
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('home')}},      "Home"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('tutorials')}}, "Tutorials"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('support')}},   "Support"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('faq')}},       "FAQ"),
        jst.$div({cn: '-navItem', events: {click: e => this.navigate('about')}},     "About"),
      )
    );
  }

  navigate(location) {
    this.app.navigate(location);
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
