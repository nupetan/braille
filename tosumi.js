"use strict";
var a={
"⠁":'あ',"⠃":'い',"⠉":'う',"⠋":'え',"⠊":'お',
"⠡":'か',"⠣":'き',"⠩":'く',"⠫":'け',"⠪":'こ',
"⠱":'さ',"⠳":'し',"⠹":'す',"⠻":'せ',"⠺":'そ',
"⠕":'た',"⠗":'ち',"⠝":'つ',"⠟":'て',"⠞":'と',
"⠅":'な',"⠇":'に',"⠍":'ぬ',"⠏":'ね',"⠎":'の',
"⠥":'は',"⠧":'ひ',"⠭":'ふ',"⠯":'へ',"⠮":'ほ',
"⠵":'ま',"⠷":'み',"⠽":'む',"⠿":'め',"⠾":'も',
"⠌":'や',"⠬":'ゆ',"⠜":'よ',
"⠑":'ら',"⠓":'り',"⠙":'る',"⠛":'れ',"⠚":'ろ',
"⠄":'わ',"⠆":'ゐ',"⠖":'ゑ',"⠔":'を',"⠴":'ん',
//ひらがな文字数：48 2017/4/1
"⠐⠡":'が',"⠐⠣":'ぎ',"⠐⠩":'ぐ',"⠐⠫":'げ',"⠐⠪":'ご',
"⠐⠱":'ざ',"⠐⠳":'じ',"⠐⠹":'ず',"⠐⠻":'ぜ',"⠐⠺":'ぞ',
"⠐⠕":'だ',"⠐⠗":'ぢ',"⠐⠝":'づ',"⠐⠟":'で',"⠐⠞":'ど',
"⠐⠥":'ば',"⠐⠧":'び',"⠐⠭":'ぶ',"⠐⠯":'べ',"⠐⠮":'ぼ',
//濁点ひらがな文字数：20 2017/4/1
"⠐⠄":'ヷ',"⠐⠆":'ヸ',"⠐⠉":'ヴ',"⠐⠖":'ヹ',"⠐⠔":'ヺ',
//濁点カタカナ文字数：5 2017/4/1
"⠠⠥":'ぱ',"⠠⠧":'ぴ',"⠠⠭":'ぷ',"⠠⠯":'ぺ',"⠠⠮":'ぽ',
//半濁点ひらがな文字数：5 2017/4/1
"⠈⠡":'きゃ',"⠈⠩":'きゅ',"⠈⠪":'きょ',
"⠈⠱":'しゃ',"⠈⠹":'しゅ',"⠈⠺":'しょ',
"⠈⠕":'ちゃ',"⠈⠝":'ちゅ',"⠈⠞":'ちょ',
"⠈⠅":'にゃ',"⠈⠍":'にゅ',"⠈⠎":'にょ',
"⠈⠥":'ひゃ',"⠈⠭":'ひゅ',"⠈⠮":'ひょ',
"⠈⠵":'みゃ',"⠈⠽":'みゅ',"⠈⠾":'みょ',
"⠈⠑":'りゃ',"⠈⠙":'りゅ',"⠈⠚":'りょ',
//拗音ひらがな文字数：21 2017/4/1
"⠘⠡":'ぎゃ',"⠘⠩":'ぎゅ',"⠘⠪":'ぎょ',
"⠘⠱":'じゃ',"⠘⠹":'じゅ',"⠘⠺":'じょ',
"⠘⠕":'ぢゃ',"⠘⠝":'ぢゅ',"⠘⠞":'ぢょ',
"⠘⠥":'びゃ',"⠘⠭":'びゅ',"⠘⠮":'びょ',
//拗濁音ひらがな文字数：12 2017/4/1
"⠨⠥":'ぴゃ',"⠨⠭":'ぴゅ',"⠨⠮":'ぴょ',
//拗半濁音ひらがな文字数：3 2017/4/1
/*外来語由来仮名表記 2017/4/15追加*/
"⠈⠋":'いぇ',"⠈⠫":'きぇ',"⠈⠻":'しぇ',"⠈⠟":'ちぇ',"⠈⠏":'にぇ',"⠈⠯":'ひぇ',
"⠘⠻":'じぇ',
"⠢⠁":'うぁ',"⠢⠃":'うぃ',"⠢⠋":'うぇ',"⠢⠊":'うぉ',
"⠢⠡":'くぁ',"⠢⠣":'くぃ',"⠢⠫":'くぇ',"⠢⠪":'くぉ',
"⠢⠕":'つぁ',"⠢⠗":'つぃ',"⠢⠟":'つぇ',"⠢⠞":'つぉ',
"⠢⠥":'ふぁ',"⠢⠧":'ふぃ',"⠢⠯":'ふぇ',"⠢⠮":'ふぉ',
"⠲⠐⠡":'ぐぁ',"⠲⠐⠣":'ぐぃ',"⠲⠐⠫":'ぐぇ',"⠲⠐⠪":'ぐぉ',
"⠲⠐⠥":'ヴぁ',"⠲⠐⠧":'ヴぃ',"⠲⠐⠯":'ヴぇ',"⠲⠐⠮":'ヴぉ',
"⠢⠝":'とぅ',
"⠲⠝":'どぅ',
"⠈⠳":'すぃ',"⠈⠗":'てぃ',
"⠘⠐⠳":'ずぃ',"⠘⠐⠗":'でぃ',
"⠨⠝":'てゅ',"⠨⠬":'ふゅ',"⠨⠜":'ふょ',
"⠸⠝":'でゅ',"⠸⠬":'ヴゅ',"⠸⠜":'ヴょ',
//外来語由来仮名　文字数：43 2017/4/8
"⠰⠀":'、',"⠲⠀⠀":'。',
"⠐⠀":'・',
"⠖":'！',"⠢":'？',
"⠂":'っ',
"⠒":'ー'
//記号など文字数：7 2018/1/20
};
//変数説明//
//a:連想配列
//b:未定義
//c:入力されたテキスト
//d:点字をひらがなに変換する処理のループ
//e:2文字合致を判断する文字列
/*fは関数名*/
//g:1文字合致を判断する文字
//h:出力文字
//l:textareaの入力部id
//m:textareaの出力部id
function f(){
var c,e,g,i,j,k,r,x,y;
var d=0,h="";
c=document.getElementById("l");
//点字をひらがなに変換する処理
for(;d<c.value.length;d++){
	e=g=c.value.charAt(d);//1文字を格納
	e+=c.value.charAt(d+1); //2文字を格納
	if(a[e]!==undefined){//2文字合致
		h+=a[e];
		d++;
	}
	else if(a[g]!==undefined)//1文字合致
		h+=a[g];
	else//入力文字に対応した墨字が無ければ入力文字をそのまま表示
		h+=g;
}
	m.value=h;
}
window.setInterval(f,70);
