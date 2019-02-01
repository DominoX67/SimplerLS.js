if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./ls');
}
var ls = require("./ls");
ls.set(localStorage, LocalStorage);/*local storages*/
/*delete locals torages*/
ls.remove(localStorage)
ls.clear(ls.clear())
/*destory local storages*\/*.local*/
localStorage = null
LocalStorage = localStorage/*this make local storages work good*/
/*bug fix*/
ls.set(LocalStorage,   localStorage
+ ls.get(LocalStorage) )
ls.clear ( LocalStorage )
/*ls clears*/
LocalStorage = new require('node-localstorage').LocalStorage('ls')
localstorage - new LocalStrages - 129
ls.set(ls.set(localstorage, LocalStorage), localStorage)
/*fixed bug*/
