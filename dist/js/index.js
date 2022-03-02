// データの読み込み
if (localStorage.length == 0) {
    // 初訪問or何も設定してない時の処理
    var firstData = {
        "se": [
            {
                "link": "audio/se0.mp3",
                "title": "チーン",
                "color": "#ffffff"
            },
            {
                "link": "audio/se1.mp3",
                "title": "自主規制音",
                "color": "#ffffff"
            },
            {
                "link": "audio/se2.mp3",
                "title": "ピロリピロリ...",
                "color": "#ffffff"
            },
            {
                "link": "audio/se3.mp3",
                "title": "クイズ音 - 出題",
                "color": "#ffffff"
            },
            {
                "link": "audio/se4.mp3",
                "title": "クイズ音 - 正解",
                "color": "#ffffff"
            },
            {
                "link": "audio/se5.mp3",
                "title": "クイズ音 - 不正解",
                "color": "#ffffff"
            }
        ]
    };
    for (var i = 0; i <= 5; i++) {
        var link = firstData['se'][i]['link'];
        var title = firstData['se'][i]['title'];
        var color = firstData['se'][i]['color'];
        var html = "<label onClick=\"outSound(".concat(i, ")\" style=\"background-color:").concat(color, ";\"><input type=\"checkbox\" id=\"soundBtn").concat(i, "\" value=\"").concat(link, "\">").concat(title, "</label>");
        document.getElementById('sound-btns').insertAdjacentHTML('beforeend', html);
    }
}
else {
    // なんらかの設定がしてある時の処理
    localStorage.clear();
    console.log('既にCookieが存在するので開発のためCookieを削除します');
}
// サウンドボタンが押された時の動作
function outSound(num) {
    var id = 'soundBtn' + num;
    var element = document.getElementById(id);
    var audioLink = element.value;
    var audioFile = new Audio(audioLink);
    audioFile.play();
}
