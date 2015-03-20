/**
 * Transform the first character of a string into an upper case:
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
 * Transform every first character of a word into an upper case:
 *
 *   `hello world` --> `Hello World`
 *
 * @return {string}
 */
String.prototype.ucfirstAll = function ucfirstAll() {
  return this.split(' ').map(function(word) {
    return word.ucfirst();
  }).join(' ');
};