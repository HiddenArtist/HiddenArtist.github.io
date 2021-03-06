import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
Welcome to the support page for **Hidden Artist**. I will do everything I can 
to solve your problem. 

## Reporting a Problem

The best way to report a bug or problem that you are experiencing within Hidden Artist is
to [raise an issue](https://github.com/HiddenArtist/hidden-artist-docs-and-issues/issues). 
Reproducible issues raised will be prioritized and fixed in future releases. It is a good
place to discuss the problem and find a workaround.

## Getting Help

If you are trying to do something that you believe is possible but you can't find out how to do it, the
best place to start is to watch the [Tutorials](/tutorials) or check out the [Frequently Asked Questions](/faq).
If you still don't know the answer, you can [post a question here](https://apple.stackexchange.com/).

`
//
// Tutorials
//
export class Tutorials extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
