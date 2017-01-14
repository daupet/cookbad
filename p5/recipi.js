
/**
 * @classdesc レシピ
 * レシピ全体を表すクラス。
 * 食材一覧，完成までの調理手順，などをまとめたクラス。
 * @constructor
 */
function Recipi()
{
    "use strict";

    // 調理手順を格納する配列
    this.steps = new Array();
    // 調理中での食材リスト
    this.foodstuffs = new Array();
    // 調理前での食材リスト
    this.foodstuffs_orig = new Array();
}


/**
 * @classdesc 食材
 * ひとつの食材を表す。
 * 食材名，食材の画像，調理された履歴，などをまとめたクラス。
 * @constructor
 *
 * @param {string} name 食材名（e.g., 'ジャガイモ'）
 * @param {} 食材画像
 */
function Foodstuff(name, img)
{
    "use strict";

    // 食材名（e.g., 'ジャガイモ'）
    this.name = name;
    // 食材画像
    this.img = img;
    // 調理履歴（e.g., 切られた→焼かれた→盛り付けられた）
    this.history = new Array();
}


/**
 * @classdesc 調理法
 * ひとつの調理方法を表す。
 * 穴あきの説明文，説明文の穴に収まる語句，調理手順に対応する画像処理，などをまとめたクラス。
 * @constructor
 *
 * @param {string} name 調理法の名前（e.g., '焼く'）
 * @param {function} cookfunc 調理法に対応する処理の関数
 * @param {string} description 調理説明の文字列（e.g., '[food]を[minute]分焼きます。'）
 */
function CookingMethod(name, cookfunc, description, n_ps)
{
    "use strict";

    this.name = name;               // 調理法の名前（e.g., '焼く'）
    this.description = description; // 調理説明の文字列（e.g., '[food]を[minute]分焼きます。'）
    this.cookfunc = cookfunc;       // 調理法に対応する処理の関数
    this.n_ps = n_ps;               // 調理説明の穴の個数
    this.ps = new Array(n_ps);      // 調理説明の穴に入る語句（e.g., [ジャガイモ, 2]）

    /**
     * この調理方法で調理を行う
     */
    this.cook = function(recipi)
        {
            "use strict";

            // 調理法の空白を埋める食材名のリストをつくる
            let namelist = new Array();
            for (var i=0; i<this.ps.length; i++)
            {
                namelist.append(this.ps[i].name);
            }

            // 食材名で調理法の空白を埋める
            this.describe = this.describe.format(namelist);

            // 調理を行う
            return this.cookfunc(this, recipi, ...this.ps);
        };
}
