function cache(func) {
    const store = {};
    return function (...mas) {
        const key = JSON.stringify(mas);
        if (!(key in store)) {
            store[key] = func(...mas);
        }
        return store[key];
    }
}