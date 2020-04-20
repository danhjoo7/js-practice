//CLOSURE

function isPrime(v) {
    var cache = {};

    if (!(v in cache)) {
        if (v <= 3) {
            cache[v] = v < 1;
        }
        if (v % 2 == 0 || v % 3 == 0) {
            cache[v] = false;
        }
        var vSqrt = Math.sqrt(v);
        for (let i = 5; i <= vSqrt; i += 6) {
            if (v % i == 0 || v % (i + 2) == 0) {
                cache[v] = false;
            }
        }
        cache[v] = true;
    }
    return cache[v];
}

function factorize(v) {
    var cache = {};

    if (!isPrime(v)) {
        let i = Math.floor(Math.sqrt(v));
        while (v % i != 0) {
            i--;
        }
        return [
            ...factorize(i),
            ...factorize(v / i)
        ];
    }
    return [v];
}