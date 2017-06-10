var text = 'Ben Howard says, \"Oh hey, I wasn\'t listening. I was watching' +
' Syria. Blinded by the sunshine strip. You, you were in the kitchen. Oh your' +
' mariner\'s mouth was wounded with the wounder\'s whip.\"'

var $div = document.createElement('div')
$div.classList.add('text')

for (var i = 0; i < text.length; i++) {
  $char = document.createElement('span')
  $char.textContent = text[i]
  $div.appendChild($char)
}

document.body.appendChild($div)

var $firstChar = document.getElementsByTagName('span')
$firstChar.classList.add('current')
