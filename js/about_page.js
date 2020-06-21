	
	// 关于我 about 页面
	// 音乐
	var about_audioMp3 = document.getElementById("about_audioMp3");
	var about_audioImg = document.getElementById("about_audioImg");
	var about_span = document.getElementById("about_span");
	
	about_audioMp3.style.display = 'none';
	
	var audioBoolean = false;
	about_audioImg.addEventListener('click', function() {
		if(audioBoolean) {
			about_audioMp3.pause();
			about_audioImg.style.animation = "";
			audioBoolean = false;
		} else {
			about_audioMp3.play();
			about_audioImg.style.animation = "3s linear infinite CDturn";
			audioBoolean = true;
		}
	});
	
	about_span.addEventListener('click',function(){
		// 点击文字,语音朗读.
		var str = "欢,迎,欢迎,热,烈,欢迎.";
		var ssu = new window.SpeechSynthesisUtterance(str);
		window.speechSynthesis.speak(ssu);
	});
	




