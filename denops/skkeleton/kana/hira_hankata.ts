import { hiraToKata } from "./hira_kata.ts";
const hankataTable: Record<string, string> = {
  "ア": "ｱ",
  "バ": "ﾊﾞ",
  "ベ": "ﾍﾞ",
  "ビ": "ﾋﾞ",
  "ボ": "ﾎﾞ",
  "ブ": "ﾌﾞ",
  "ダ": "ﾀﾞ",
  "デ": "ﾃﾞ",
  "ヂ": "ﾁﾞ",
  "ド": "ﾄﾞ",
  "ヅ": "ﾂﾞ",
  "エ": "ｴ",
  "ガ": "ｶﾞ",
  "ゲ": "ｹﾞ",
  "ギ": "ｷﾞ",
  "ゴ": "ｺﾞ",
  "グ": "ｸﾞ",
  "ハ": "ﾊ",
  "ヘ": "ﾍ",
  "ヒ": "ﾋ",
  "ホ": "ﾎ",
  "フ": "ﾌ",
  "イ": "ｲ",
  "カ": "ｶ",
  "ケ": "ｹ",
  "キ": "ｷ",
  "コ": "ｺ",
  "ク": "ｸ",
  "マ": "ﾏ",
  "メ": "ﾒ",
  "ミ": "ﾐ",
  "モ": "ﾓ",
  "ム": "ﾑ",
  "ナ": "ﾅ",
  "ネ": "ﾈ",
  "ニ": "ﾆ",
  "ン": "ﾝ",
  "ノ": "ﾉ",
  "ヌ": "ﾇ",
  "オ": "ｵ",
  "パ": "ﾊﾟ",
  "ペ": "ﾍﾟ",
  "ピ": "ﾋﾟ",
  "ポ": "ﾎﾟ",
  "プ": "ﾌﾟ",
  "ラ": "ﾗ",
  "レ": "ﾚ",
  "リ": "ﾘ",
  "ロ": "ﾛ",
  "ル": "ﾙ",
  "サ": "ｻ",
  "セ": "ｾ",
  "シ": "ｼ",
  "ソ": "ｿ",
  "ス": "ｽ",
  "タ": "ﾀ",
  "テ": "ﾃ",
  "チ": "ﾁ",
  "ト": "ﾄ",
  "ツ": "ﾂ",
  "ワ": "ﾜ",
  "ヲ": "ｦ",
  "ウ": "ｳ",
  "ァ": "ｧ",
  "ェ": "ｪ",
  "ィ": "ｨ",
  "ォ": "ｫ",
  "ッ": "ｯ",
  "ゥ": "ｩ",
  "ヮ": "ヮ",
  "ヱ": "ヱ",
  "ヰ": "ヰ",
  "ャ": "ｬ",
  "ョ": "ｮ",
  "ュ": "ｭ",
  "ヤ": "ﾔ",
  "ヨ": "ﾖ",
  "ユ": "ﾕ",
  "ザ": "ｻﾞ",
  "ゼ": "ｾﾞ",
  "ジ": "ｼﾞ",
  "ゾ": "ｿﾞ",
  "ズ": "ｽﾞ",
  "ヴ": "ｳﾞ",
};

export function hiraToHanKata(input: string): string {
  const katakana = hiraToKata(input);
  return [...katakana].map((c) => hankataTable[c] ?? c).join("");
}
