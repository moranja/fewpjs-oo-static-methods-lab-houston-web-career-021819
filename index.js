class Formatter {

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize (string) {
    return string.replace(/[^a-z0-9-'\s]+/gi, '');
  }

  static titleize (string) {
    const string_array = string.split(' ')
    const output_array = []
    const doNotTitleize = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    string_array.forEach(function(word, index){
      if (index === 0 || doNotTitleize.includes(word) !== true) {
        output_array.push(Formatter.capitalize(word))
      } else {
        output_array.push(word)
      }
    })
    return output_array.join(' ')
  }
}
