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
	"⠒":'ー',
/*ハイフン*/'-':"⠒",
//記号など文字数：16 2017/4/1
};
/////変数の説明/////
//aはひらがな、一部カタカナ並びに記号各種を点字と対応付けした連想配列です。
//
//bは機種依存文字をひらがな（次に列挙するカタカナを除いて）と対応付けした
//連想配列です。意図しない入力を調和します。
//ここに示すカタカナは文字符号化スキームの都合上、ひらがな、カタカナ、
//そのほか文字列の組み合わせをこれに変換します。
//ヷ va
//ヸ vi
//ヴ vu
//ヹ ve
//ヺ vo
//
//lはtextareaの入力部idです
//mはtextareaの出力部idです

var b={
//カタカナ　清音
	'ア':"あ",'イ':"い",'ウ':"う",'エ':"え",'オ':"お",
	'カ':"か",'キ':"き",'ク':"く",'ケ':"け",'コ':"こ",
	'サ':"さ",'シ':"し",'ス':"す",'セ':"せ",'ソ':"そ",
	'タ':"た",'チ':"ち",'ツ':"つ",'テ':"て",'ト':"と",
	'ナ':"な",'ニ':"に",'ヌ':"ぬ",'ネ':"ね",'ノ':"の",
	'ハ':"は",'ヒ':"ひ",'フ':"ふ",'ヘ':"へ",'ホ':"ほ",
	'マ':"ま",'ミ':"み",'ム':"む",'メ':"め",'モ':"も",
	'ヤ':"や",'ユ':"ゆ",'ヨ':"よ",
	'ラ':"ら",'リ':"り",'ル':"る",'レ':"れ",'ロ':"ろ",
	'ワ':"わ",'ヰ':"ゐ",'ヱ':"ゑ",'ヲ':"を",'ン':"ん",

//丸で囲ったカタカナ　清音
	'㋐':"あ",'㋑':"い",'㋒':"う",'㋓':"え",'㋔':"お",
	'㋕':"か",'㋖':"き",'㋗':"く",'㋘':"け",'㋙':"こ",
	'㋚':"さ",'㋛':"し",'㋜':"す",'㋝':"せ",'㋞':"そ",
	'㋟':"た",'㋠':"ち",'㋡':"つ",'㋢':"て",'㋣':"と",
	'㋤':"な",'㋥':"に",'㋦':"ぬ",'㋧':"ね",'㋨':"の",
	'㋩':"は",'㋪':"ひ",'㋫':"ふ",'㋬':"へ",'㋭':"ほ",
	'㋮':"ま",'㋯':"み",'㋰':"む",'㋱':"め",'㋲':"も",
	'㋳':"や",'㋴':"ゆ",'㋵':"よ",
	'㋶':"ら",'㋷':"り",'㋸':"る",'㋹':"れ",'㋺':"ろ",
	'㋻':"わ",'㋼':"ゐ",'㋽':"ゑ",'㋾':"を",

//半角カナ　清音
	'ｱ':"あ",'ｲ':"い",'ｳ':"う",'ｴ':"え",'ｵ':"お",
	'ｶ':"か",'ｷ':"き",'ｸ':"く",'ｹ':"け",'ｺ':"こ",
	'ｻ':"さ",'ｼ':"し",'ｽ':"す",'ｾ':"せ",'ｿ':"そ",
	'ﾀ':"た",'ﾁ':"ち",'ﾂ':"つ",'ﾃ':"て",'ﾄ':"と",
	'ﾅ':"な",'ﾆ':"に",'ﾇ':"ぬ",'ﾈ':"ね",'ﾉ':"の",
	'ﾊ':"は",'ﾋ':"ひ",'ﾌ':"ふ",'ﾍ':"へ",'ﾎ':"ほ",
	'ﾏ':"ま",'ﾐ':"み",'ﾑ':"む",'ﾒ':"め",'ﾓ':"も",
	'ﾔ':"や",'ﾕ':"ゆ",'ﾖ':"よ",
	'ﾗ':"ら",'ﾘ':"り",'ﾙ':"る",'ﾚ':"れ",'ﾛ':"ろ",
	'ﾜ':"わ",'ｦ':"を",'ﾝ':"ん",

//組み文字
	'㌀':"あぱーと",'㌁':"あるふぁ",'㌂':"あんぺあ",'㌃':"あーる",
	'㌄':"いにんぐ",'㌅':"いんち",'㌆':"うぉん",'㌇':"えすくーど",
	'㌈':"えーかー",'㌉':"おんす",'㌊':"おーむ",'㌋':"かいり",
	'㌌':"からっと",'㌍':"かろりー",'㌎':"がろん",'㌏':"がんま",
	'㌐':"ぎが",'㌑':"ぎにー",'㌒':"きゅりー",'㌓':"ぎるだー",
	'㌔':"きろ",'㌕':"きろぐらむ",'㌖':"きろめーとる",
	'㌗':"きろわっと",'㌘':"ぐらむ",'㌙':"ぐらむとん",
	'㌚':"くるぜいろ",'㌛':"くろーね",'㌜':"けーす",'㌝':"こるな",
	'㌞':"こーぽ",'㌟':"さいくる",'㌠':"さんちーむ",
	'㌡':"しりんぐ",'㌢':"せんち",'㌣':"せんと",'㌤':"だーす",
	'㌥':"でし",'㌦':"どる",'㌧':"とん",'㌨':"なの",'㌩':"のっと",
	'㌪':"はいつ",'㌫':"ぱーせんと",'㌬':"ばーつ",
//'㌬':"パーツ", どうでもいいけどルーヴルが美術館でルーブルがお金なんだね
	'㌭':"ばーれる",'㌮':"ぴあすとる",'㌯':"ぴくる",'㌰':"ぴこ",
	'㌱':"びる",'㌲':"ふぁらっど",'㌳':"ふぃーと",
	'㌴':"ぶっしぇる",'㌵':"ふらん",'㌶':"へくたーる",'㌷':"ぺそ",
	'㌸':"ぺにひ",'㌹':"へるつ",'㌺':"ぺんす",'㌻':"ぺーじ",
	'㌼':"べーた",'㌽':"ぽいんと",'㌾':"ぼると",'㌿':"ほん",
	'㍀':"ぽんど",'㍁':"ほーる",'㍂':"ほーん",'㍃':"まいくろ",
	'㍄':"まいる",'㍅':"まっは",'㍆':"まるく",'㍇':"まんしょん",
	'㍈':"みくろん",'㍉':"みり",'㍊':"みりばーる",'㍋':"めが",
	'㍌':"めがとん",'㍍':"めーとる",'㍎':"やーど",'㍏':"やーる",
	'㍐':"ゆあん",'㍑':"りっとる",'㍒':"りら",'㍓':"るぴー",
	'㍔':"るーぶる",'㍕':"れむ",'㍖':"れんとげん",'㍗':"わっと",

//合略仮名と隠語
/*より*/'ゟ':"より",
/*コト*/'ヿ':"こと",
/*マス*/'〼':"ます",//丁寧語のます
/*ただ*/'只':"ただ",//無料

///////
//濁点//
///////
//カタカナ　濁音（一文字）
	'ガ':"が",'ギ':"ぎ",'グ':"ぐ",'ゲ':"げ",'ゴ':"ご",
	'ザ':"ざ",'ジ':"じ",'ズ':"ず",'ゼ':"ぜ",'ゾ':"ぞ",
	'ダ':"だ",'ヂ':"ぢ",'ヅ':"づ",'デ':"で",'ド':"ど",
	'バ':"ば",'ビ':"び",'ブ':"ぶ",'ベ':"べ",'ボ':"ぼ",
//ヴヷヸヹヺ
/*//組み合わせカタカナ　濁音始まり*///////////
//カタカナ　濁音（清音にU+309B濁点を付した）
	'カ゛':"が",'キ゛':"ぎ",'ク゛':"ぐ",'ケ゛':"げ",'コ゛':"ご",
	'サ゛':"ざ",'シ゛':"じ",'ス゛':"ず",'セ゛':"ぜ",'ソ゛':"ぞ",
	'タ゛':"だ",'チ゛':"ぢ",'ツ゛':"づ",'テ゛':"で",'ト゛':"ど",
	'ハ゛':"ば",'ヒ゛':"び",'フ゛':"ぶ",'ヘ゛':"べ",'ホ゛':"ぼ",
	'ウ゛':"ヴ",'ワ゛':"ヷ",'ヰ゛':"ヸ",'ヱ゛':"ヹ",'ヲ゛':"ヺ",
//カタカナ　濁音（清音にU+3099濁点を付した）
	'ガ':"が",'ギ':"ぎ",'グ':"ぐ",'ゲ':"げ",'ゴ':"ご",
	'ザ':"ざ",'ジ':"じ",'ズ':"ず",'ゼ':"ぜ",'ゾ':"ぞ",
	'ダ':"だ",'ヂ':"ぢ",'ヅ':"づ",'デ':"で",'ド':"ど",
	'バ':"ば",'ビ':"び",'ブ':"ぶ",'ベ':"べ",'ボ':"ぼ",
	'ヴ':"ヴ",'ヷ':"ヷ",'ヸ':"ヸ",'ヹ':"ヹ",'ヺ':"ヺ",
//カタカナ　濁音（清音にU+FF9E濁点を付した）
	'カﾞ':"が",'キﾞ':"ぎ",'クﾞ':"ぐ",'ケﾞ':"げ",'コﾞ':"ご",
	'サﾞ':"ざ",'シﾞ':"じ",'スﾞ':"ず",'セﾞ':"ぜ",'ソﾞ':"ぞ",
	'タﾞ':"だ",'チﾞ':"ぢ",'ツﾞ':"づ",'テﾞ':"で",'トﾞ':"ど",
	'ハﾞ':"ば",'ヒﾞ':"び",'フﾞ':"ぶ",'ヘﾞ':"べ",'ホﾞ':"ぼ",
	'ウﾞ':"ヴ",'ワﾞ':"ヷ",'ヰﾞ':"ヸ",'ヱﾞ':"ヹ",'ヲﾞ':"ヺ",
/*//組み合わせカタカナ　濁音終わり*///////////

/*//組み合わせ㋕㋟㋕㋤　濁点始まり*///////////
//丸で囲ったカタカナ　濁音（清音にU+309B濁点を付した）
	'㋕゛':"が",'㋖゛':"ぎ",'㋗゛':"ぐ",'㋘゛':"げ",'㋙゛':"ご",
	'㋚゛':"ざ",'㋛゛':"じ",'㋜゛':"ず",'㋝゛':"ぜ",'㋞゛':"ぞ",
	'㋟゛':"だ",'㋠゛':"ぢ",'㋡゛':"づ",'㋢゛':"で",'㋣゛':"ど",
	'㋩゛':"ば",'㋪゛':"び",'㋫゛':"ぶ",'㋬゛':"べ",'㋭゛':"ぼ",
	'㋒゛':"ヴ",'㋻゛':"ヷ",'㋼゛':"ヸ",'㋽゛':"ヹ",'㋾゛':"ヺ",
//丸で囲ったカタカナ　濁音（清音にU+3099濁点を付した）
	'㋕゙':"が",'㋖゙':"ぎ",'㋗゙':"ぐ",'㋘゙':"げ",'㋙゙':"ご",
	'㋚゙':"ざ",'㋛゙':"じ",'㋜゙':"ず",'㋝゙':"ぜ",'㋞゙':"ぞ",
	'㋟゙':"だ",'㋠゙':"ぢ",'㋡゙':"づ",'㋢゙':"で",'㋣゙':"ど",
	'㋩゙':"ば",'㋪゙':"び",'㋫゙':"ぶ",'㋬゙':"べ",'㋭゙':"ぼ",
	'㋒゙':"ヴ",'㋻゙':"ヷ",'㋼゙':"ヸ",'㋽゙':"ヹ",'㋾゙':"ヺ",
//丸で囲ったカタカナ　濁音（清音にU+FF9E濁点を付した）
	'㋕ﾞ':"が",'㋖ﾞ':"ぎ",'㋗ﾞ':"ぐ",'㋘ﾞ':"げ",'㋙ﾞ':"ご",
	'㋚ﾞ':"ざ",'㋛ﾞ':"じ",'㋜ﾞ':"ず",'㋝ﾞ':"ぜ",'㋞ﾞ':"ぞ",
	'㋟ﾞ':"だ",'㋠ﾞ':"ぢ",'㋡ﾞ':"づ",'㋢ﾞ':"で",'㋣ﾞ':"ど",
	'㋩ﾞ':"ば",'㋪ﾞ':"び",'㋫ﾞ':"ぶ",'㋬ﾞ':"べ",'㋭ﾞ':"ぼ",
	'㋒ﾞ':"ヴ",'㋻ﾞ':"ヷ",'㋼ﾞ':"ヸ",'㋽ﾞ':"ヹ",'㋾ﾞ':"ヺ",
/*//組み合わせ㋕㋟㋕㋤　濁点終わり*///////////

/*//組み合わせ半角カナ　濁点始まり*///////////
//半角カナ　濁音（清音にU+309B濁点を付した）
	'ｶ゛':"が",'ｷ゛':"ぎ",'ｸ゛':"ぐ",'ｹ゛':"げ",'ｺ゛':"ご",
	'ｻ゛':"ざ",'ｼ゛':"じ",'ｽ゛':"ず",'ｾ゛':"ぜ",'ｿ゛':"ぞ",
	'ﾀ゛':"だ",'ﾁ゛':"ぢ",'ﾂ゛':"づ",'ﾃ゛':"で",'ﾄ゛':"ど",
	'ﾊ゛':"ば",'ﾋ゛':"び",'ﾌ゛':"ぶ",'ﾍ゛':"べ",'ﾎ゛':"ぼ",
	'ｳ゛':"ヴ",'ﾜ゛':"",'ｦ゛':"ヲﾞ",
//半角カナ　濁音（清音にU+3099濁点を付した）
	'ｶ゙':"が",'ｷ゙':"ぎ",'ｸ゙':"ぐ",'ｹ゙':"げ",'ｺ゙':"ご",
	'ｻ゙':"ざ",'ｼ゙':"じ",'ｽ゙':"ず",'ｾ゙':"ぜ",'ｿ゙':"ぞ",
	'ﾀ゙':"だ",'ﾁ゙':"ぢ",'ﾂ゙':"づ",'ﾃ゙':"で",'ﾄ゙':"ど",
	'ﾊ゙':"ば",'ﾋ゙':"び",'ﾌ゙':"ぶ",'ﾍ゙':"べ",'ﾎ゙':"ぼ",
	'ｳ゙':"ヴ",'ﾜ゙':"",'ｦ゙':"ヲﾞ",
//半角カナ　濁音（清音にU+FF9E濁点を付した）
	'ｶﾞ':"が",'ｷﾞ':"ぎ",'ｸﾞ':"ぐ",'ｹﾞ':"げ",'ｺﾞ':"ご",
	'ｻﾞ':"ざ",'ｼﾞ':"じ",'ｽﾞ':"ず",'ｾﾞ':"ぜ",'ｿﾞ':"ぞ",
	'ﾀﾞ':"だ",'ﾁﾞ':"ぢ",'ﾂﾞ':"づ",'ﾃﾞ':"で",'ﾄﾞ':"ど",
	'ﾊﾞ':"ば",'ﾋﾞ':"び",'ﾌﾞ':"ぶ",'ﾍﾞ':"べ",'ﾎﾞ':"ぼ",
	'ｳﾞ':"ヴ",'ﾜﾞ':"ヷ",'ｦﾞ':"ヺ",
/*//組み合わせ半角カナ　濁点終わり*///////////

/*/組み合わせひらがな　濁点始まり*////////////
//ひらがな　濁音（清音にU+FF9E濁点を付した）
	'が':"が",'ぎ':"ぎ",'ぐ':"ぐ",'げ':"げ",'ご':"ご",
	'ざ':"ざ",'じ':"じ",'ず':"ず",'ぜ':"ぜ",'ぞ':"ぞ",
	'だ':"だ",'ぢ':"ぢ",'づ':"づ",'で':"で",'ど':"ど",
	'ば':"ば",'び':"び",'ぶ':"ぶ",'べ':"べ",'ぼ':"ぼ",
	'ゔ':"ヴ",'わ゙':"ヷ",'ゐ゙':"ヸ",'ゑ゙':"ヹ",'を゙':"ヺ",
/*/組み合わせひらがな　濁点終わり*////////////

//////////
//半濁点//
//////////
//カタカナ　半濁音（一文字）
	'パ':"ぱ",'ピ':"ぴ",'プ':"ぷ",'ペ':"ぺ",'ポ':"ぽ",

/*//組み合わせカタカナ　半濁音始まり*///////////
//カタカナ　半濁音（清音にU+309Cを付したもの）
	'ハ゜':"ぱ",'ヒ゜':"ぴ",'フ゜':"ぷ",'ヘ゜':"ぺ",'ホ゜':"ぽ",
//カタカナ　半濁音（清音にU+309Aを付したもの）
	'パ':"ぱ",'ピ':"ぴ",'プ':"ぷ",'ペ':"ぺ",'ポ':"ぽ",
//カタカナ　半濁音（清音にU+FF9Fを付したもの）
	'ハﾟ':"ぱ",'ヒﾟ':"ぴ",'フﾟ':"ぷ",'ヘﾟ':"ぺ",'ホﾟ':"ぽ",
/*//組み合わせカタカナ　半濁音終わり*///////////

/*//組み合わせ㋕㋟㋕㋤　濁点始まり*///////////
//丸で囲ったカタカナ　半濁音（清音にU+309Cを付したもの）
	'㋩゜':"ぱ",'㋪゜':"ぴ",'㋫゜':"ぷ",'㋬゜':"ぺ",'㋭゜':"ぽ",
//丸で囲ったカタカナ　半濁音（清音にU+309Aを付したもの）
	'㋩゚':"ぱ",'㋪゚':"ぴ",'㋫゚':"ぷ",'㋬゚':"ぺ",'㋭゚':"ぽ",
//丸で囲ったカタカナ　半濁音（清音にU+FF9Fを付したもの）丸で囲ったカタカナ
	'㋩ﾟ':"ぱ",'㋪ﾟ':"ぴ",'㋫ﾟ':"ぷ",'㋬ﾟ':"ぺ",'㋭ﾟ':"ぽ",
/*//組み合わせ㋕㋟㋕㋤　濁点終わり*///////////

/*//組み合わせ半角カナ　濁点始まり*///////////
//半角カナ　半濁音（清音にU+309Cを付したもの）
	'ﾊ゜':"ぱ",'ﾋ゜':"ぴ",'ﾌ゜':"ぷ",'ﾍ゜':"ぺ",'ﾎ゜':"ぽ",
//半角カナ　半濁音（清音にU+309Aを付したもの）
	'ﾊ゚':"ぱ",'ﾋ゚':"ぴ",'ﾌ゚':"ぷ",'ﾍ゚':"ぺ",'ﾎ゚':"ぽ",
//半角カナ　半濁音（清音にU+FF9Fを付したもの）
	'ﾊﾟ':"ぱ",'ﾋﾟ':"ぴ",'ﾌﾟ':"ぷ",'ﾍﾟ':"ぺ",'ﾎﾟ':"ぽ",
/*//組み合わせ半角カナ　濁点終わり*///////////

/*//組み合わせひらがな　濁点始まり*///////////
//ひらがな　半濁音（清音にU+309Aを付したもの）
'ぱ':"ぱ",'ぴ':"ぴ",'ぷ':"ぷ",'ぺ':"ぺ",'ぽ':"ぽ",
/*//組み合わせひらがな　濁点終わり*///////////
//	「゛」U+309B「゙	」U+3099「ﾞ」U+FF9E
//	「゜」U+309C「゚	」U+309A「ﾟ」U+FF9F


///////////
//捨て仮名//
///////////
//カタカナ・半角カナ　捨て仮名
	'ァ':"ぁ",'ィ':"ぃ",'ゥ':"ぅ",'ェ':"ぇ",'ォ':"ぉ",'ャ':"ゃ",'ュ':"ゅ",'ョ':"ょ",'ッ':"っ",
	'ｧ':"ぁ",'ｨ':"ぃ",'ｩ':"ぅ",'ｪ':"ぇ",'ｫ':"ぉ",'ｬ':"ゃ",'ｭ':"ゅ",'ｮ':"ょ",'ｯ':"っ",
/*
対応する点字が存在しないのでコメントアウト
ゎ
ゕゖ
ヵヶ
ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ
ㇷ゚
*/


////////
//記号//
////////
	'｡':"。",
	'｢':"「",
	'｣':"」",
	'､':"、",
	'･':"・",
	'ｰ':"ー"
}
//
// var a={
// 	'あ':"⠁",'い':"⠃",'う':"⠉",'え':"⠋",'お':"⠊",
// 	'か':"⠡",'き':"⠣",'く':"⠩",'け':"⠫",'こ':"⠪",
// 	'さ':"⠱",'し':"⠳",'す':"⠹",'せ':"⠻",'そ':"⠺",
// 	'た':"⠕",'ち':"⠗",'つ':"⠝",'て':"⠟",'と':"⠞",
// 	'な':"⠅",'に':"⠇",'ぬ':"⠍",'ね':"⠏",'の':"⠎",
//
// 	'は':"⠥",'ひ':"⠧",'ふ':"⠭",'へ':"⠯",'ほ':"⠮",
// 	'ま':"⠵",'み':"⠷",'む':"⠽",'め':"⠿",'も':"⠾",
// 	'や':"⠌",'ゆ':"⠬",'よ':"⠜",
// 	'ら':"⠑",'り':"⠓",'る':"⠙",'れ':"⠛",'ろ':"⠚",
// 	'わ':"⠄",'ゐ':"⠆",'ゑ':"⠖",'を':"⠔",'ん':"⠴",
// //ひらがな文字数：48 2017/4/1
//
// 	'が':"⠐⠡",'ぎ':"⠐⠣",'ぐ':"⠐⠩",'げ':"⠐⠫",'ご':"⠐⠪",
// 	'ざ':"⠐⠱",'じ':"⠐⠳",'ず':"⠐⠹",'ぜ':"⠐⠻",'ぞ':"⠐⠺",
// 	'だ':"⠐⠕",'ぢ':"⠐⠗",'づ':"⠐⠝",'で':"⠐⠟",'ど':"⠐⠞",
// 	'ば':"⠐⠥",'び':"⠐⠧",'ぶ':"⠐⠭",'べ':"⠐⠯",'ぼ':"⠐⠮",
// //濁点ひらがな文字数：20 2017/4/1
//
// 	'ヷ':"⠐⠄",'ヸ':"⠐⠆",'ヴ':"⠐⠉",'ヹ':"⠐⠖",'ヺ':"⠐⠔",
// //濁点カタカナ文字数：5 2017/4/1
//
// 	'ぱ':"⠠⠥",'ぴ':"⠠⠧",'ぷ':"⠠⠭",'ぺ':"⠠⠯",'ぽ':"⠠⠮",
// //半濁点ひらがな文字数：5 2017/4/1
//
// 	'きゃ':"⠈⠡",'きゅ':"⠈⠩",'きょ':"⠈⠪",
// 	'しゃ':"⠈⠱",'しゅ':"⠈⠹",'しょ':"⠈⠺",
// 	'ちゃ':"⠈⠕",'ちゅ':"⠈⠝",'ちょ':"⠈⠞",
// 	'にゃ':"⠈⠅",'にゅ':"⠈⠍",'にょ':"⠈⠎",
// 	'ひゃ':"⠈⠥",'ひゅ':"⠈⠭",'ひょ':"⠈⠮",
// 	'みゃ':"⠈⠵",'みゅ':"⠈⠽",'みょ':"⠈⠾",
// 	'りゃ':"⠈⠑",'りゅ':"⠈⠙",'りょ':"⠈⠚",
// //拗音ひらがな文字数：21 2017/4/1
//
// 	'ぎゃ':"⠘⠡",'ぎゅ':"⠘⠩",'ぎょ':"⠘⠪",
// 	'じゃ':"⠘⠱",'じゅ':"⠘⠹",'じょ':"⠘⠺",
// 	'ぢゃ':"⠘⠕",'ぢゅ':"⠘⠝",'ぢょ':"⠘⠞",
// 	'びゃ':"⠘⠥",'びゅ':"⠘⠭",'びょ':"⠘⠮",
// //拗濁音ひらがな文字数：12 2017/4/1
//
// 	'ぴゃ':"⠨⠥",'ぴゅ':"⠨⠭",'ぴょ':"⠨⠮",
// //拗半濁音ひらがな文字数：3 2017/4/1
//
// /*外来語由来仮名表記 2017/4/15追加*/
// //拗音符⠈
// //え⠋
// //け⠫
// //せ⠻
// //て⠟
// //ね⠏
// //へ⠯
// 'いぇ':"⠈⠋",'きぇ':"⠈⠫",'しぇ':"⠈⠻",'ちぇ':"⠈⠟",'にぇ':"⠈⠏",'ひぇ':"⠈⠯",
// //拗濁音符⠘
// //せ⠻
// 'じぇ':"⠘⠻",
// //疑問符⠢
// //句点符⠲（空白無し）
// //あ⠁い⠃ //う⠉// え⠋お⠊
// //か⠡き⠣ //く⠩// け⠫こ⠪
// //た⠕ち⠗ //つ⠝// て⠟と⠞
// //は⠥ひ⠧ //ふ⠭// へ⠯ほ⠮
// //が⠐⠡ぎ⠐⠣ //ぐ⠐⠩// げ⠐⠫ご⠐⠪
// //ば⠐⠥び⠐⠧ //ぶ⠐⠭// べ⠐⠯ぼ⠐⠮
// 'うぁ':"⠢⠁",'うぃ':"⠢⠃",'うぇ':"⠢⠋",'うぉ':"⠢⠊",
// 'くぁ':"⠢⠡",'くぃ':"⠢⠣",'くぇ':"⠢⠫",'くぉ':"⠢⠪",
// 'つぁ':"⠢⠕",'つぃ':"⠢⠗",'つぇ':"⠢⠟",'つぉ':"⠢⠞",
// 'ふぁ':"⠢⠥",'ふぃ':"⠢⠧",'ふぇ':"⠢⠯",'ふぉ':"⠢⠮",
// 'ぐぁ':"⠲⠐⠡",'ぐぃ':"⠲⠐⠣",'ぐぇ':"⠲⠐⠫",'ぐぉ':"⠲⠐⠪",
// 'ヴぁ':"⠲⠐⠥",'ヴぃ':"⠲⠐⠧",'ヴぇ':"⠲⠐⠯",'ヴぉ':"⠲⠐⠮",
// //疑問符⠢
// //句点符⠲（空白無し）
// //拗音符⠈
// //拗濁音符⠘
// //つ⠝
// //し⠳
// //ち⠗
// //じ⠐⠳
// //ぢ⠐⠗
// 'とぅ':"⠢⠝",
// 'どぅ':"⠲⠝",
// 'すぃ':"⠈⠳",'てぃ':"⠈⠗",
// 'ずぃ':"⠘⠐⠳",'でぃ':"⠘⠐⠗",
// //拗半濁音符⠨
// //なにか⠸
// //濁音符⠐
// //つ⠝
// //ゆ⠬
// //よ⠜
// //う⠉
// 'てゅ':"⠨⠝",'ふゅ':"⠨⠬",'ふょ':"⠨⠜",
// 'でゅ':"⠸⠝",'ヴゅ':"⠸⠬",'ヴょ':"⠸⠜",
// //外来語由来仮名　文字数：43 2017/4/8
//
// 	'、':"⠰⠀",'。':"⠲⠀⠀",
// 	'，':"⠰⠀",'．':"⠲⠀⠀",
// 	'・':"⠐⠀",
// 	'･':"⠐⠀",
// 	'！':"⠖",'？':"⠢",
// 	'!':"⠖",'?':"⠢",
// 	'っ':"⠂",'ッ':"⠂",'ｯ':"⠂",
// 	'ー':"⠒",'ｰ':"⠒",
// /*ハイフン*/'-':"⠒",
// //記号など文字数：16 2017/4/1
// };

//f:関数名
//g:入力されたテキスト
//h:パースしたものを足していく変数
//i:for文を回す回数を記憶する変数
//j:連想配列のキーに相当する変数
//[未使用]k:出力するテキスト
//r:1024を上限とした残りの文字数
//[未使用]w:4文字を格納する変数->
//x:3文字を格納する変数->ｼﾞｬ、ｼﾞｭ、ｼﾞｮなどが含まれるか判断する
//y:2文字を格納する変数->しゃ、しゅ、しょなどが含まれるか判断する

//app
//org
//mkn
//loop
function f(){
var g,h="",i,j,k,r,x,y;
	g=document.getElementById("l");
	k=document.getElementById("m");

var loop,app,org,mkn="";
	for(loop=0;loop<g.value.length;loop=loop+1){
		app=org=g.value.charAt(loop);
		app+=g.value.charAt(loop+1);
		if(b[app]!==undefined){
			mkn+=b[app];
			loop=loop+1;
		}
		else if(b[org]!==undefined)
			mkn+=b[org];
		else
			mkn+=org;
	}
	for(i=0;i<mkn.length;i++){
		x=y=j=mkn.charAt(i);
		x=y+=mkn.charAt(i+1);
		x+=mkn.charAt(i+2);
		if(a[x]!==undefined){
			h+=a[x];
			i=i+2;
		}
		else if(a[y]!==undefined){
			h+=a[y];
			i=i+1;
		}
		else if(a[j]!==undefined)
			h+=a[j];
		else
			h+=j;
		}
	m.value=h;
	r=65535-g.value.length;
	if(r>0)
		document.getElementById('r').innerHTML="残り"+r+"文字";
	else
		document.getElementById('r').innerHTML="超過した文字列は削除されます";
}
window.setInterval(f,70);
