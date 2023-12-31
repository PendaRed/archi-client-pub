## Rusty Architecture Client

In several jobs I needed a guide for devs to show data flows and services.  I did this with a little interactive picture they could click on, to get summaries, and lists of URLS.

This is not a UML diagram, nor is it a support dashboard.  It is for developers who want a quick intro to a system with links.

This time I decided to do it as a Rust Wasm project, and since its my first Rust the code is, well, bad.  So I'm not sharing the code, but I am sharing the little web site example.

## The demo

Is on [github pages here](https://pendared.github.io/archi-client-pub/).

Click on the 'mini map', click to zoom, click on the boxes, click on the data flows, click on the arrows on the data flow.  Mouse over the boxes and arrows for tool tips.

ps Yes I know it's really basic, and yes, I'll improve it somewhat still, but it's my first Rist wasm, done in between real life.

## Can you use it?

Yes you can.  (Bob the builder reference).

Anyway, edit the design.json and the styles.json, and change the linked pages.  After downloading you should see what I mean.

## For your new project

Create your own project - eg an empty dir, and then init the dir, and install the depenencies.

You will need to add a dependency to the pkg dir which contains archi-client, see the example package.json in this project.

This example has the design in the data directory, and the documents in the public directory.  The design directory is hard coded, but it can have any urls within it - this example refers to ./public/...

```
npm init
# Now edit the package.json to include the webpack dev dependencies and the pkg dir
# you can copy these from this example projects package.json
npm install
```
You should check node-modules and ensure that archi-client was copied in there from the archi-client directory that is listed in your package.json dependencies.   I had to run npm install a couple of times.

Finally to serve up your designs just do
```
npm start
```
This will allow you to view index.html will loads up the data\design.sjon and the data\styles.json
and from that starts to draw the pictures.  In this example the design documentation is in the public dir - but you can change the urls in the design to load them from anywhere.

And then to bundle up your site as usual, which invokes webpack and copies it all into dist.

```
npm run build --omit=dev
```
For my site, I host on github pages, so you will notice I changed webpack.confif.js to publish to docs rather than dist.   You could also use Jekyl or similar to produce the public content and link to that.


## Supported pictures

V1.0.0:

Shapes you can use in style.json

- rect:  A rectangle about the service name.
- can: a tin can shape, used for data stores really.

Clickable regions

- On the dataflows you can click on the arrow, and hover over for tool tip.
- On the rectangle/can you can hover over for tool tip, or click on to display the URL.

Group-by

- Visio users will understand group-by.   This tool has instead an optional 'parent id' which can refer to another service.  All x and y will then be relative to the parent, which means you can move the block together.
