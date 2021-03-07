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
If you are in the gallery, first tap the painting you wish to share. Then tap on the menu
icon in the top right-hand corner (the three lines). This lets you share the painting image
or share the 'hart' file. The 'hart' file is all information associated with the painting, which
let's you or someone else continue to paint that painting on a different device.

## Q: Why to I get a Hidden Artist watermark in my shared paintings? Can I remove it?
That watermark is added to shared images if you are using the free version. After you
upgrade to the Pro version of Hidden Artist it will no longer be added to shared paintings.
Visit the Hidden Artist Store to purchase the Pro version.

## Q: How do I get to the Hidden Artist Store?
When in the gallery, click on the menu in the top left corner (three black lines) and select
**Hidden Artist Store** from the menu.

## Q: When I am in "Photos" on my device, I don't see Hidden Artist as one of the apps that can open a photo 
At the moment, Hidden Artist does not provide a "Share Extension". This is a separate app that
loads within Photos to perform a simple share function. This may be added later, but at the moment
if you want to import your own photos to Hidden Artist, you need to do it from within the Hidden Artist
app. Simply add a new painting by going to the gallery, tapping on the frame with a big '+' and choose
"Add your own photo" from the menu.

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
