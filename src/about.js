import {jst}        from "jayesstee";
import {MD}         from "./md.js";
import {Page}       from "./page.js";

const page = `
# About Hidden Artist
**Hidden Artist** is the first mobile app published by me, a single developer in Ottawa, Canada. 

![Ottawa Parliament Buildings - Half Painted](/img/Ottawa_Parliament.jpg)

I have played around with the concept for years and greatly enjoyed painting pictures with it. During the pandemic 
I finally had time to push it through all the hoops to actually get it published.

All feedback is very welcome. There are a few ways for providing feedback:
1. Add a comment and rating on the app store
2. Add a comment to one of the [YouTube Tutorials](https://www.youtube.com/playlist?list=PLAArMTrI4jpC3bz9N5SRKxUt22vfg3kB-)
3. Go to the [support page](#/support) and raise an issue or feature request
4. Tweet to and follow @HiddenArtistApp

Finally, if you enjoyed the app please tell people about it. I don't want to advertise and I certainly don't want to 
put any ads in it. If you want to buy something within the app, by all means do - but only if you really like it.

`
//
// About
//
export class About extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
