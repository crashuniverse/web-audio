var audioContext = new (window.AudioContext || window.webkitAudioContext)
var oscillator, gainNode

function createOscillatorNode() {
  var oscillator = audioContext.createOscillator()
  return oscillator
}

document.querySelector('#start').addEventListener('click', function startOscillator() {
  oscillator = createOscillatorNode()
  gainNode = audioContext.createGain()
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = 'sine'
  oscillator.frequency.value = '2000'

  oscillator.start()
});

document.querySelector('#stop').addEventListener('click', function stopOscillator() {
  oscillator.stop()
});
