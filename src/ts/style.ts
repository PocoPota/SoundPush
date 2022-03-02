// 画面の横幅,縦幅
var widthSize:number = window.outerWidth;
var heightSize:number = window.outerHeight;

// 効果音の数
var itemNum :number = document.getElementById('sound-btns')!.childElementCount;

// 必要横幅の計算
if(itemNum <= 4){
    var needWidthSize:number = 170 * itemNum + 30 * (itemNum - 1);
}else if(itemNum <= 8){
    var needWidthSize:number = 170 * (itemNum / 2) + 30 * ((itemNum / 2) - 1);
}else if(itemNum <= 12){
    var needWidthSize:number = 170 * (itemNum / 3) + 30 * ((itemNum / 3) - 1);
}else{
    var needWidthSize:number = 0;
}

// 必要縦幅の計算
if(itemNum <= 4){
    var needHeightSize:number = 170;
}else if(itemNum <= 8){
    var needHeightSize:number = 170 * 2 + 30;
}else if(itemNum <= 12){
    var needHeightSize:number = 170 * 3 + 30 * 2;
}else{
    var needHeightSize:number = 0;
}

// 横幅CSS
if(widthSize > needWidthSize){
    var soundBtns:HTMLInputElement = <HTMLInputElement>document.getElementById('sound-btns');
    var needWidthSizeString:string = needWidthSize + 'px';
    soundBtns.style.width = needWidthSizeString;
}

// 縦幅CSS
if(heightSize > needHeightSize){
    var main:HTMLInputElement = <HTMLInputElement>document.getElementById('top');
    main.style.height = '100vh';
}