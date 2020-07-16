


var postBlock = document.getElementsByClassName("post-block");

// 换肤
var arr = ["rgb(199,237,204)", "#252d38", "rgba(255, 255, 255, 0.8)"]
var index = 0;
document.getElementById('skin_peeler').addEventListener('click', function () {
   // 第一次点击，切换到护眼主题。
   // 第二点击，切换到暗黑主题。
   // 第三次点击，切换到原主题。然后开始循环。
   for (var i = 0; i < postBlock.length; i++) {
      postBlock[i].style.backgroundColor = arr[index];

      if (index == 1) {
         // 暗黑模式，改变字体颜色。
         postBlock[i].style.color = "#d0d0d0";
      } else {
         postBlock[i].style.color = "";
      }
   };
   if (index != 2) {
      index++;
   } else {
      index = 0;
   }
})

// 朗读
var read_aloud = document.getElementById("read_aloud");
var boo = false; 
read_aloud.addEventListener('click', function () {
   if (boo) {
      speechSynthesis.cancel();
      boo = false;
   } else {
      var str = postBlock[0].innerText;
      var ssu = new SpeechSynthesisUtterance(str);
      speechSynthesis.speak(ssu);
      boo = true;
   }
});

// 音乐
var audioMp3 = document.getElementById("audioMp3");
var audioImg = document.getElementById("audioImg");

audioMp3.style.display = 'none';
audioMp3.src = "https://blove7.cn/resource/musics/猛烈的雷阵雨.mp3"

var audioBoolean = false;
audioImg.addEventListener('click', function () {
   if (audioBoolean) {
      audioImg.style.animation = "";
      audioBoolean = false;
      audioMp3.pause();
   } else {
      audioImg.style.animation = "3s linear infinite CDturn";
      audioBoolean = true;
      audioMp3.play();
   }
});
