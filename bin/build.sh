#!/usr/bin/env bash
CHROME=$(mdfind kMDItemCFBundleIdentifier == 'com.google.Chrome' | head -n 1)
SKETCH=$(mdfind kMDItemCFBundleIdentifier == 'com.bohemiancoding.sketch3' | head -n 1)
CHROME_CLI="$CHROME/Contents/MacOS/Google Chrome"
SKETCH_TOOL="$SKETCH/Contents/Resources/sketchtool/bin/sketchtool"

# Export SVGs via Sketch
$SKETCH_TOOL export slices "Automotive Icons.sketch" --output=svg/ --formats=svg

# Generate fonts and preview
icon-font-generator svg/*.svg -o build/ --height 1000 --prefix automotive --name automotive --htmltp ./templates/html.hbs

# Screenshot for README.md
"$CHROME_CLI" --headless --disable-gpu --hide-scrollbars --window-size=850,1000 --screenshot=./build/automotive-icons.png ./build/automotive-icons.html
