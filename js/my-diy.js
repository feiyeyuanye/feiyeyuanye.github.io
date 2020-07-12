

// 换肤
 var sty = "rgb(199,237,204)";
 document.getElementById('skin_peeler').addEventListener('click',function(){
    var postBlock=document.getElementsByClassName("post-block");
    for (var i = 0;i<postBlock.length;i++) {
       postBlock[i].style.backgroundColor = sty;
    };
    if(sty == "rgba(255, 255, 255, 0.8)"){
       sty = "rgb(199,237,204)";
    }else {
       sty = "rgba(255, 255, 255, 0.8)";
    }
 })

// 音乐
var audioMp3 = document.getElementById("audioMp3");
var audioImg = document.getElementById("audioImg");

audioMp3.style.display = 'none';
audioMp3.src="https://blove7.cn/resource/musics/猛烈的雷阵雨.mp3"

var audioBoolean = false;
audioImg.addEventListener('click', function() {
  if(audioBoolean) {
     audioImg.style.animation = "";
     audioBoolean = false;
     audioMp3.pause();
   } else {
     audioImg.style.animation = "3s linear infinite CDturn";
     audioBoolean = true;
     audioMp3.play();
   }
});
