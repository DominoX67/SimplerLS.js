if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./ls');
}
var ls = require("./ls");
ls.set("a", "b");
console.log(ls.get("a"));
var array = ["this", 1, "that"];
ls.setObj("arr", array);
console.log(ls.getObj("arr"));
if (ls.exist("arr")) {
    ls.remove("arr");
    console.log(ls.get("arr"));
}
ls.clear();
console.log(ls.get("a"));