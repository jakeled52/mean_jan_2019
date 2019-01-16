function flatten(a, r=[]) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] instanceof Array) {
            flatten(a[i], r);
        }
        else {
            r.push(a[i]);
        }
    }
    return r;
}
console.log(flatten([1, [2, [3, 4]]]))
