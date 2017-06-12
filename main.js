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

var $firstChar = document.querySelector('span')
$firstChar.classList.add('current')

function moveCurrent() {
  var $currentChar = document.querySelector('.current')
  $currentChar.classList.remove('current')
  $currentChar.nextSibling.classList.add('current')
}

function feedback(event) {
  var $current = document.querySelector('.current')
  var current = $current.textContent
  if (current === event.key) {
    $current.classList.add('correct')
  }
  else {
    $current.classList.add('wrong')
  }
}

document.addEventListener('keypress', moveCurrent)
