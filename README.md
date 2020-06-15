# Automotive Icon Fonts

Icon fonts for an automotive app

![Automotive Icon Fonts](automotive-icons.png?raw=true)

## Usage

Install

```bash
npm install automotive-icons
```

Import the css or include it in some other fashion.

```javascript
import "automotive-icons/build/automotive.css";
```

Icon names are prefixed with `automotive`.

```html
<i class="automotive-car" />
<i class="automotive-van" />
<i class="automotive-bike" />
```

## build

All highly specific to OSX

### Setup

Install [Sketch](https://www.sketch.com/)

Install `npm install icon-font-generator`

### Editing Icons

Edit `Automotive Icons.sketch`.

Icons generally need to be contructed from paths. Shapes can be converted with "Convert to Outlines".

### Building fonts

This script will export all icons from the sketch file as svg and then convert to icon-fonts.
It will also update any preview files/images.

```bash
./bin/build.sh
```

Preview the output with

```
open ./build/automotive.html
```
