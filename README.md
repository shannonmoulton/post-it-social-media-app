## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial


## changes made by Ian
set the background width to be 100% vertical and horizontal. to avoid repeat background images or white space

added a media query to create static width for 1400px and under screens. the static 400px image was going out of the box containers at that point. so i set the box cointainer static at 600px with a media query

edited the post page to show a single "card" with the same background box as the login page

bugs i noticed:
any wide images past 600px wide overflow out the card container in the post page.
i know instagram limits image sizes, or we need to abandon the card background for the post unless we resize images but that distorts the images or crops images. 
