const micAudio = document.getElementById('microphoneSound');

function playAudio() {
    console.log('hello')
    micAudio.currentTime = 0;
    micAudio.play(); 
}
