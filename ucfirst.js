/**
 * Make a string's first character uppercase
 *
 *  `hello world` --> `Hello world`
 *
 * @return {string}
 */
String.prototype.ucfirst = function ucfirst() {
  return this.split('').map(function(char, i) {
    return i === 0 ? char.toUpperCase() : char
  }).join('');
};

/**
 * Uppercase the first character of each word in a string
 *
 *   `hello world` --> `Hello World`
 *
 * @return {string}
 */
String.prototype.ucwords = function ucfirstAll() {
  return this.split(' ').map(function(word) {
    return word.ucfirst();
  }).join(' ');
};