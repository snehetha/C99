var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    speak();
    }
    function speak(){
        var synth=window.speechSynthesis;
        speek_data=document.getElementById("textbox").value;
        var utterThis=new SpeechSynthesisUtterance(speek_data);
        synth.speak(utterThis);
        Webcam.attach(camera);
    }
    camera=document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format:'jpeg',
        jpeg_quality:100
    });