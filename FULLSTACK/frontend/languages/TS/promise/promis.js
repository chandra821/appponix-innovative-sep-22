var dhanushPromise = new Promise(function (res, notres) {
    res('hello it resloved');
    notres('not resolved');
});
dhanushPromise["catch"](function (a) { console.log(a); });
dhanushPromise.then(function (a) { console.log(a); });
