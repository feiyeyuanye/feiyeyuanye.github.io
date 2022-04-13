// 阅读
var isReading = false;
document.getElementById('read_cut').addEventListener('click', function() {
    var main = document.getElementsByClassName("main")[0];
    var footer = document.getElementsByClassName("footer")[0];
    var live2d = document.getElementById("live2d-widget");
    var pace = document.getElementsByClassName("pace-done use-motion")[0];
    var post_body = document.getElementsByClassName("post-body")[0];

    if (isReading) {
        //  切换回正常模式
        var readCut = document.getElementById("readCut");
        pace.removeChild(readCut);

        main.style.display = 'block';
        footer.style.display = 'block';
        if (live2d) {
            live2d.style.display = 'block';
        }

        isReading = false;
    } else {
        //  切换为阅读模式
        var li = document.createElement("div");
        li.style.width = '100%';
        li.style.minHeight = '100%';
        li.style.position = 'absolute';
        li.style.background = arr[index];
        if (index == 2) {
            // 暗黑模式，改变字体颜色。
            li.style.color = "#d0d0d0";
        } else {
            li.style.color = "";
        }
        li.style.top = '0px';
        li.id = 'readCut';
        // 总结点的子节点数
        var t = pace.childNodes.length;
        // 给子节点设置内容
        li.innerHTML = post_body.innerHTML;
        li.getElementsByClassName('m_more_content_bg_img')[0].style.display = 'none';
        var ps = li.getElementsByTagName('p');
        for (var i = 0; i < ps.length; i++) {
            // 上下 左右
            ps[i].style.padding = '0px 10px';
        }
        // 添加到总结点中
        pace.insertBefore(li, pace.childNodes[t]);

        main.style.display = 'none';
        footer.style.display = 'none';
        if (live2d) {
            live2d.style.display = 'none';
        }

        isReading = true;
    }
})


// 换肤
var arr = ["rgba(255, 255, 255, 0.8)", "rgb(199,237,204)", "#252d38"]
var index = 0;
var index1 = 0;
document.getElementById('skin_peeler').addEventListener('click', function() {
    if (index != 2) {
        ++index;
    } else {
        index = 0;
    }
    //  console.log(++index) // 1
    //  console.log(index1++) // 0
    var readCut = document.getElementById("readCut");
    if (readCut) {
        // readCut 存在，阅读模式
        readCut.style.backgroundColor = arr[index];
        if (index == 2) {
            // 暗黑模式，改变字体颜色。
            readCut.style.color = "#d0d0d0";
        } else {
            readCut.style.color = "";
        }
    }
    // readCut 不存在，普通模式
    var postBlock = document.getElementsByClassName("post-block");
    // 第一次点击，切换到护眼主题。
    // 第二点击，切换到暗黑主题。
    // 第三次点击，切换到原主题。然后开始循环。
    for (var i = 0; i < postBlock.length; i++) {
        postBlock[i].style.backgroundColor = arr[index];
        if (index == 2) {
            // 暗黑模式，改变字体颜色。
            postBlock[i].style.color = "#d0d0d0";
        } else {
            postBlock[i].style.color = "";
        }
    };
})

// 朗读
var read_aloud = document.getElementById("read_aloud");
var boo = false;
read_aloud.addEventListener('click', function() {
    var postBody = document.getElementsByClassName("post-body");
    if (boo) {
        speechSynthesis.cancel();
        boo = false;
    } else {
        var str = postBody[0].innerText;
        var ssu = new SpeechSynthesisUtterance(str);
        speechSynthesis.speak(ssu);
        boo = true;
    }
});

// 音乐
var audioMp3 = document.getElementById("audioMp3");
var audioImg = document.getElementById("audioImg");

audioMp3.style.display = 'none';
var audioBoolean = false;
audioImg.addEventListener('click', function() {
    audioMp3.src = "https://blove7.cn/resource/musics/猛烈的雷阵雨.mp3"
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