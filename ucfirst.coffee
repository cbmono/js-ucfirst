#
# Make a string's first character uppercase
#
#  `hello world` --> `Hello world`
#
# @return {string}
#
String.prototype.ucfirst = ->
  @split('').map((char, i) -> unless i then char.toUpperCase() else char).join('')

#
# Uppercase the first character of each word in a string
#
#  `hello world` --> `Hello World`
#
# @return {string}
#
String.prototype.ucwords = ->
  @split(' ').map((word) -> word.ucfirst()).join(' ')