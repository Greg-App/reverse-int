module.exports = function reverse (n) {
    let str = Array.from(String(n)).reverse().join('');
    return str;

};
