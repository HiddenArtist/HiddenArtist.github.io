import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Welcome to Hidden Artist
![Painted in Hidden Artist](/example1.jpg)

## What is this thing and why would I use it?

Hidden Artist is a cross between a coloring app and a painting app. You select a photo
to paint and Hidden Artist will use that photo to put the appropriate colors onto 
your brush at that location of the painting.

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

Currently Hidden Artist is only available for iPhone and iPad devices. [Let me know](/support) if you would
like to see it on other platforms.








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
