import {jst}        from "jayesstee";
import {Page}       from "./page.js";

const page = `
# Frequently Asked Questions

## Q: What is your privacy policy?
We collect no data and never transmit any images or other information outside of your device,
with the exception of images that you choose to share with the Share menu. The sharing
of images is completely in the control of the operating system of your device. For more
on our privacy policy, see **Privacy Policy** on the [support page](/#/support).

## Q: How can I share a painting?
If you are in the gallery, first tap on the name panel beneath the painting you wish to share. 
Then choose 'Share' in the popup menu. This lets you share the painting image
or share the Hidden Artist file. The Hidden Artist file is all information associated with the painting, which
lets you or someone else continue to paint that painting on a different device.

## Q: What is a 'Hidden Artist file' and why do I care?
A Hidden Artist file, is a file that contains all information about your painting. It allows
you to move a painting in progress from one device to another - or one person to another. Early 
versions of Hidden Artist would share a file with the extension '.hart'. This has been changed to
share a '.svg' file with the painting information embedded within it. Sharing an SVG image file
works a bit better in Apple's ecosystem.

## Q: Why do I get an '.svg' file when sharing a Hidden Artist file?
SVG image files are used to carry the Hidden Artist painting data when sharing between devices
or friends. By using SVGs, email readers and file browsers can show some information about the
embedded painting in its image and it can be shared easier than a file with a custom extension.

## Q: Why to I get a Hidden Artist watermark in my shared paintings? Can I remove it?
That watermark is added to shared images if you are using the free version. After you
upgrade to the Pro version of Hidden Artist it will no longer be added to shared paintings.
Visit the Hidden Artist Store to purchase the Pro version.

## Q: How do I get to the Hidden Artist Store?
When in the gallery, click on the menu in the top left corner (three black lines) and select
**Hidden Artist Store** from the menu.

## Q: How do I import one of my own photos?
This easiest way to do this is to go to your photos app and select the photo you want to import. Click the
share button. Look through the possible ways to share your photo and select Hidden Artist.

Additionally, you can choose 'Add your own photo' from the New Painting menu when creating a new painting 
with the Hidden Artist app. This will allow you to import your own photo and then start painting.

Note: you can only import your own pictures in the pro version.

## Q: How do I get more pictures to paint?
You can either purchase additional photo bundles or upgrade to the pro version and import your own photos. 
Visit the Hidden Artist store in the app to do an in app purchase.

## Q: Any suggestions for types of pictures to import?
Yes! I am glad you asked.

Good photos to paint are generally ones with bold and bright colors. It is best if there is one or
two main objects or people to paint that fill the majority of the picture. High resolution (at least 2500px)
is best, however you can experiment lower resolution pictures for different effects. 

If you are using a photo taken with your device, I recommend editing it and cropping it to just what you
want to paint. Then use the tools in the photo editor to boost the warmth of the colors in the picture. 


`
//
// FAQ
//
export class FAQ extends Page {
  constructor() {
    super();
    this.page = page;
  }
}
