var audioContext = new (window.AudioContext || window.webkitAudioContext)
var oscillator, gainNode

var standardFrequencies = {
  'b': 246.94,
  'c': 261.63,
  'd': 293.66,
  'e': 329.63,
  'f': 349.23,
  'g': 392,
  'a': 440
}

function createOscillatorNode() {
  var oscillator = audioContext.createOscillator()
  return oscillator
}

document.addEventListener('click', playFrequency)

function playFrequency(event) {
  var id = event.target.id
  switch(id) {
    case 'b-maj':
      playFrequencyInOscillator(standardFrequencies.b)
      break
    case 'c-maj':
      playFrequencyInOscillator(standardFrequencies.c)
      break
    case 'd-maj':
      playFrequencyInOscillator(standardFrequencies.d)
      break
    case 'e-maj':
      playFrequencyInOscillator(standardFrequencies.e)
      break
    case 'f-maj':
      playFrequencyInOscillator(standardFrequencies.f)
      break
    case 'g-maj':
      playFrequencyInOscillator(standardFrequencies.g)
      break
    case 'a-maj':
      playFrequencyInOscillator(standardFrequencies.a)
      break
    default:
      break
  }
}

function playFrequencyInOscillator(frequency) {
  var thisOscillator = oscillator = createOscillatorNode()
  gainNode = audioContext.createGain()
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = 'sine'
  oscillator.frequency.value = frequency

  oscillator.start()

  setTimeout(function stopPlayingThisFrequency() {
    thisOscillator.stop()
  }, 300)
}
