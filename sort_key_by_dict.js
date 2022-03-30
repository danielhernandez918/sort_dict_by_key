function sortObjectByKeys(o) {
    return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
}
var unsorted = {"c":"crane","b":"boy","a":"ant"};
var sorted=sortObjectByKeys(unsorted); //{a: "ant", b: "boy", c: "crane"}
console.log(sorted)