var text = 'Ben Howard says, \"Oh hey, I wasn\'t listening. I was watching' +
' Syria. Blinded by the sunshine strip. You, you were in the kitchen. Oh your' +
' mariner\'s mouth was wounded with the wounder\'s whip.\"'
var correctNum = 0
var wrongNum = 0

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
  if ($currentChar !== null) {
    $currentChar.classList.remove('current')

    if ($currentChar.nextSibling !== null) {
      $currentChar.nextElementSibling.classList.add('current')
    }
  }
}

function feedback(event) {
  var $current = document.querySelector('.current')
  if ($current !== null) {
    var current = $current.textContent
    if (current === event.key) {
      $current.classList.add('correct')
    }
    else {
      $current.classList.add('wrong')
    }
  }
}

function score() {
  var $current = document.querySelector('.current')
  if ($current.nextSibling !== null) {
    if ($current.classList.contains('correct')) {
       correctNum++
    }
    else {
      wrongNum++
    }
  }
  else {
    var total = (correctNum / text.length) * 100
    total = total.toFixed(1)
    var $newParagraph = document.createElement('p')
    $newParagraph.classList.add('score')
    $newParagraph.textContent = 'You got ' + total + '% correct!'
    document.body.appendChild($newParagraph)
  }
}

function time() {
  return performance.now()
}

function calculateWPM(time1, time2, paragraph) {
  var secs = (time2 - time1) / 100000

  var wpm = ((paragraph.length / 5) - wrongNum) / secs
  wpm = wpm.toFixed(1)

  return wpm

}

function outputWPM(per) {
  $newParagraph = document.createElement('p')
  $newParagraph.classList.add('wpm')
  $newParagraph.textContent = 'You typed ' + per + ' words per minute!'
  document.body.appendChild($newParagraph)
}

var miliSecs1 = time()

document.addEventListener('keypress', function() {
  var $current = document.querySelector('.current')

  feedback(event)
  score()
  moveCurrent()

  if ($current.nextSibling === null) {
    var miliSecs2 = time()
    var words = calculateWPM(miliSecs1, miliSecs2, text)
    outputWPM(words)
  }
})
