import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Welcome to Hidden Artist

![Painted in Hidden Artist](/img/example1.jpg)

## What is this thing and why would I use it?

Hidden Artist is a cross between a puzzle game, a coloring app and a painting app. You choose a
painting to paint based only on a name and then you start painting. As you paint, your brush
will be given the appropriate color for that location on the painting. 

In some ways it is the simplest painting app out there, but there is hidden complexity and 
skill needed to achieve paintings of high quality. How you paint will let you vary your painting
from highly photo-realistic to a rougher more typical oil painting.

## Mental Health Benefits of Art and Coloring

[Numerous](https://www.beaumont.org/health-wellness/blogs/health-benefits-of-coloring-for-adults) 
[studies](https://health.clevelandclinic.org/3-reasons-adult-coloring-can-actually-relax-brain/) 
[have](https://www.developgoodhabits.com/benefits-adult-coloring/) 
[shown](https://www.psychologytoday.com/ca/blog/modern-mentality/201803/are-adult-coloring-books-actually-helpful) 
the benefit of drawing, coloring and just creating things. I don't know that Hidden Artist will
provide the same relief from stress and anxiety, but I would love to hear from anyone who has
found some benefit. All I can say is that I enjoy it a lot. 

## How do I get Hidden Artist

Currently Hidden Artist is only available for iPhone and iPad devices. You can find it in the [Apple App Store](https://apps.apple.com/us/app/hidden-artist/id1547335559#).

[Let me know](#/support) if you would like to see it on other platforms.


## Join us 

If you want to get updates or make comments about the app, please join us on [Reddit](https://www.reddit.com/r/HiddenArtistApp/) or [@HiddenArtistApp](https://twitter.com/HiddenArtistApp).



`
//
// Home
//
export class Home extends Page {
  constructor() {
    super();
    this.page = page;
  }
}

