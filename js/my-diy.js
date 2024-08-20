       /**禁止右击事件菜单弹出*/
       document.oncontextmenu = ContextMenu;

       function ContextMenu() {
           return false;
       }
       /** 全局事件监听, 禁止使用ctrl+s、ctrl+u、F12、ctrl+shift+I、ctrl+shift+c*/
       document.body.onkeydown = function(e) {
           var keyCode = e.keyCode || e.which || e.charCode;
           var ctrlKey = e.ctrlKey || e.metaKey;
           if (ctrlKey && (keyCode == 83 || keyCode == 85 || keyCode == 73)) {
               e.preventDefault();
               return false;
           }
           //     else if (ctrlKey && (keyCode == 83 || keyCode == 85 || keyCode == 67)) {
           //        e.preventDefault();
           //        return false;
           //    } 
           else if (keyCode && keyCode == 123) {
               return false;
           }
       }

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
               li.id = 'readCut';
               li.style.minHeight = "100vh";
               li.style.background = defaultpref;
               if (index == 2) {
                   // 暗黑模式，改变字体颜色。
                   li.style.color = pref;
               } else {
                   li.style.color = "";
               }
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
       var arr = ["rgba(255, 255, 255, 0.8)", "rgb(199,237,204)", "#252d38"];
       // 暗黑模式下的字体颜色
       var pref = '#c4c6c9';
       var index = 0;

       var postBlock = document.getElementsByClassName("post-block");
       var prefIndex = localStorage.getItem("pref");
       var defaultpref;
       if (!prefIndex) {
           //    console.log("prefIndex 为 null");
           defaultpref = arr[index];
       } else {
           //    console.log("prefIndex 不为 null");
           defaultpref = arr[prefIndex];
           index = prefIndex;
           prefcolor(defaultpref);
       }

       function prefcolor(str) {
           // 第一次点击，切换到护眼主题。
           // 第二点击，切换到暗黑主题。
           // 第三次点击，切换到原主题。然后开始循环。
           for (var i = 0; i < postBlock.length; i++) {
               postBlock[i].style.backgroundColor = str;
               if (index == 2) {
                   // 暗黑模式，改变字体颜色。
                   postBlock[i].style.color = pref;
               } else {
                   postBlock[i].style.color = "";
               }
           };
       };

       document.getElementById('skin_peeler').addEventListener('click', function() {
           if (index != 2) {
               ++index;
           } else {
               index = 0;
           }
           defaultpref = arr[index];
           //    console.log(defaultpref);
           var readCut = document.getElementById("readCut");
           if (readCut) {
               // readCut 存在，阅读模式
               readCut.style.backgroundColor = defaultpref;
               if (index == 2) {
                   // 暗黑模式，改变字体颜色。
                   readCut.style.color = pref;
               } else {
                   readCut.style.color = "";
               }
           }
           // readCut 不存在，普通模式
           prefcolor(defaultpref);
           localStorage.setItem("pref", index);
       })

    // 文章列别切换为两列
    if(postBlock.length > 3){
                // 可以双列
        var mainInner = document.getElementsByClassName("main-inner")[0]
        var twoListStorage = localStorage.getItem("twolist");
        if(twoListStorage == "main-inner-active"){
            mainInner.classList.toggle(twoListStorage);
        }
    // console.log(twoListStorage);
    var read_aloud = document.getElementById("read_aloud");
    read_aloud.addEventListener('click', function() {
        mainInner.classList.toggle("main-inner-active");
        if(twoListStorage == ""){
            twoListStorage = "main-inner-active";
        }else {
            twoListStorage = "";
        }
        localStorage.setItem("twolist", twoListStorage);
    });
    }

       // 音乐
       var audioMp3 = document.getElementById("audioMp3");
       var audioImg = document.getElementById("audioImg");

       audioMp3.style.display = 'none';
       var audioBoolean = false;
       audioImg.addEventListener('click', function() {
           audioMp3.src = "https://blove7.cn/resource/musics/%E7%99%BD%E5%99%AA%E9%9F%B3.mp3"
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


