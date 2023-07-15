/** The simplest use of uibuilder client library
 * See the docs if the client doesn't start on its own.
 */
'use strict'

uibuilder.showMsg(true, 'body');
uibuilder.onChange('msg', (msg) => {
     console.log( msg );
     var dpmsg = document.getElementById("msgsucess");
     dpmsg.innerHTML = msg.topic;
     dpmsg.style.display = "block";
     setTimeout(() => clearsuccess(), 1000);
 })

 function clearsuccess( )
 {
     document.getElementById("msgsucess").style.display = "none"; 
 }
 function openModal(videoId) {
    var modal = document.getElementById("myModal");
    var video = document.getElementById("video");
  
    // Set the YouTube video source based on the videoId parameter
    video.src = "https://www.youtube.com/embed/" + videoId;
  
    modal.style.display = "block";
  
    var closeBtn = document.getElementsByClassName("close")[0];
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
      // Pause the video when the modal is closed
      video.src = "";
    }
  
    // Pause the video and close the modal when the user clicks outside the modal content
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        video.src = "";
      }
    }
  }
  