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
    var colorArr = ['ffa3a3', 'ffa3d1', 'ffa3ff', 'd1a3ff', 'a3a3ff', 'a3d1ff', 'a3ffff', 'a3ffd1', 'a3ffa3', 'd1ffa3', 'ffffa3', 'ffd1a3'];
    for (var i = 0; i <= 5; i++) {
        var link = firstData['se'][i]['link'];
        var title = firstData['se'][i]['title'];
        var color = firstData['se'][i]['color'];
        var seColorsHtml = '';
        for (var n = 0; n <= 11; n++) {
            var colorCode = colorArr[n];
            var seColorsHtmlItem = "<label><input type=\"radio\" name=\"colorSelect".concat(i, "\" value=\"").concat(colorCode, "\"></label>");
            var seColorsHtml = seColorsHtml + seColorsHtmlItem;
        }
        var html = "\n        <div class=\"one-se-edit\">\n        <label><input type=\"file\" id=\"seFile".concat(i, "\" accept=\"audio/*\"></label>\n        <label><input type=\"text\" id=\"seTitle").concat(i, "\" placeholder=\"\u52B9\u679C\u97F3\u540D\u3092\u5165\u529B\"></label>\n        <div class=\"se-colors\">").concat(seColorsHtml, "</div>\n        </div>");
        document.getElementById('sound-edit').insertAdjacentHTML('beforeend', html);
    }
}
else {
    // なんらかの設定がしてある時の処理
    localStorage.clear();
    console.log('既にCookieが存在するので開発のためCookieを削除します');
}
// キャンセルボタンが押された時の動作
function cancel() {
    var coloseEditCheck = window.confirm('情報は保存されませんがよろしいですか？');
    if (coloseEditCheck == true) {
        history.back();
    }
    else { }
}
// 決定ボタンが押された時の動作
function decision() {
    // 効果音数の取得&localstorageに入れる
    var itemNum = document.getElementById('sound-edit').childElementCount;
    localStorage.setItem('itemNum', String(itemNum));
    // 効果音情報を取得&localstorageに入れていく
    for (var i = 0; i <= itemNum - 1; i++) {
        // アップされたファイルの取得
        var id = 'seFile' + i;
        var getFileElement = document.getElementById(id);
        var file = getFileElement.files[0];
        var blobUrl = new Blob([file], { type: 'audio/type' });
        console.log(blobUrl);
        var fileReader = new FileReader();
        fileReader.onload = function () {
            var dataURI = this.result;
            console.log(dataURI);
        };
        fileReader.readAsDataURL(blobUrl);
    }
}
