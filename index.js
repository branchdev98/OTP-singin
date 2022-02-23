document.addEventListener("DOMContentLoaded", function(event) {

    function OTPInput() {
    const inputs = document.querySelectorAll('#otp > *[id]');
    for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput(); });

    var timeoutHandle;
    function countdown(minutes, seconds) {
        function tick() {
            var counter = document.getElementById("timedisplay");
            counter.innerHTML ="Available for resending OTP in "+
                minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            seconds--;
            if (seconds >= 0) {
                timeoutHandle = setTimeout(tick, 1000);
            } else {
                if (minutes >= 1) {
                    // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                    setTimeout(function () {
                        countdown(minutes - 1, 59);
                    }, 1000);
                }
            }
        }
        tick();
        move();
    }
    
    countdown(2, 00);

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
 
   
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width= width+=0.1;
        elem.style.width = width + "%";
        time.innerHTML = "Available for resending OTP in " + width;
      }
    }
    
  }
}

var input = $('input'); // your input element

Event.observe(input, 'keydown', function(e) { // event handler
   input._lastvalue = input.value;
});

Event.observe(input, 'keyup', function(e) { // event handler
    if(input.value == input._lastvalue) return;
    if(input.value.length <= input._lastvalue.length) return;
    var caretPos = doGetCaretPosition(input);
    input.value = input.value.slice(0,caretPos) + input.value.slice(caretPos+1);
    doSetCaretPosition(input, caretPos);
});


