# SimplerLS.js
Code to simplify usage of the npm module "node-localstorage" for my and others' convenience. Requires node-localstorage as a dependency. Shortens the length of localStorage scripts to increase your efficiency and reduce time wasted typing. Successfully tested. Used in large-scale projects such as Databaser, an efficient database made with nodeJS and expressJS.

## Installation
This is a simplification of the NodeJS module. First, install nodeJS. Then, get "node-localstorage" and its dependencies by running `npm install node-localstorage`
on your command line. Create your default JS file, this could be named index.js or server.js, etc.. Then, download the ls.js file in this repository, or create
and ls.js file in your default folder and copy/paste my ls.js code into your file. Next, in your default JS file (index.js, server.js, etc.),
paste this code:
```
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./ls');
}
var ls = require("./ls");
```
(The if statement initializes node-localstorage and the statement following initializes SimplerLS).

## Usage
Here are the current properties and methods of SimplerLS:

### set(key, value)
Sets the specified key in localStorage to the specified value\
Ex: `ls.set("ExampleText", "Hello World")`

### get(key)
Gets the value in localStorage of the specified key\
Ex: `ls.get("ExampleText")` outputs `"Hello World"`

### setObj(key, obj)
Same as `set()`, but works with arrays and objects instead of strings\
Ex: `ls.setObj("ExampleArr", [1, 2, "Numbers"])`

### getObj(key)
Same as `get()`, but works with arrays and objects instead of strings\
Ex: `ls.getObj("ExampleArr")` returns `[1, 2, "Numbers"]`

### exist(key)
Checks if the specified key exists/has a specified or true value\
Ex: `ls.exist("ExampleArr")` returns `true`

### remove(key)
Removes the value of the specified key, as well as the key itself\
Ex: `ls.remove("ExampleText")` or `ls.remove("ExampleArr")`

### clear()
Clears the localStorage entirely; all previously set keys and values will be cleared\
Ex: `ls.clear()`

## Credits and Resources
node-localstorage was created by Lawrence S. Maccherone, Jr. and can be found at https://www.npmjs.com/package/node-localstorage \
SimplerLS was created by Cannicide and can be found at https://github.com/Cannicide/SimplerLS.js \
SimplerLS was tested and supported by Tim Daniels and his Databaser project.

## Notes
test.js is an example of using SimplerLS and is not a necessary portion of the SimplerLS code. My other most recent project, Sif Casino, will
also be using this simplified localStorage code soon. If you find any bugs or problems, feel free to submit issues through the repository
or contact me through discord (Cannicide#2753).
