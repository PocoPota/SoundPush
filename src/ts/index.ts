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
    }
    for (var i: number = 0; i <= 5; i++) {
        var link: string = firstData['se'][i]['link'];
        var title: string = firstData['se'][i]['title'];
        var color: string = firstData['se'][i]['color'];
        var html:string = `<label onClick="outSound(${i})" style="background-color:${color};"><input type="checkbox" id="soundBtn${i}" value="${link}">${title}</label>`;
        document.getElementById('sound-btns')!.insertAdjacentHTML('beforeend', html);
    }
} else {
    // なんらかの設定がしてある時の処理
    localStorage.clear()
    console.log('既にCookieが存在するので開発のためCookieを削除します');
}

// サウンドボタンが押された時の動作
function outSound(num: string) {
    var id: string = 'soundBtn' + num;
    var element: HTMLInputElement = <HTMLInputElement>document.getElementById(id);
    var audioLink: string = element.value;
    var audioFile = new Audio(audioLink);
    audioFile.play();
}