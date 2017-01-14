var canvas;
var dish; // 完成画像を描画するためのグラフィックバッファ

var cooking_methods_list;   // 可能な調理法のリスト
var foodstuffs_list;        // 可能な食材のリスト


function setup()
{
    "use strict";

    // キャンバスを作成する
    canvas = createCanvas(400, 250);
    canvas.id("p5_canvas");
    canvas.parent("canvas_container");
    canvas.style("background-color", "white");

    // 完成画像を描画するためのバッファを作成する
    dish = createGraphics(width, height);
    dish.fill(255);
    dish.rect(0, 0, width, height);

    // jQuery でHTMLを書き換えるテスト
    foodstuffs = ["肉", "野菜"]
    recipi = ["野菜を切る。", "肉を焼く。", "野菜を焼く。", "皿に盛る。"];

    for (var i=0; i<foodstuffs.length; i++)
    {
        $("#foodstuff_list").append("<li>" + foodstuffs[i] + "</li>")
    }
    for (var i=0; i<recipi.length; i++)
    {
        $("#cooking").append("<li>" + recipi[i] + "</li>")
    }
}


function draw()
{
    "use strict";


}


function generate_recipi(foodstuffs)
{
    "use strict";

    rcp = new Recipi();
    cooking = generate_cookings(rcp);
}


/**
 * レシピの材料一覧を生成する。
 */
function generate_foodstuffs(n_materials)
{
    "use strict";

    //import random
    //import copy

    if (n_materials <= foodstuffs_list)
    {
        return Object.assign({}, random.sample(ingredients_list, n_materials));
    }
    else
    {
        return Object.assign({}, random.sample(ingredients_list, len(ingredients_list)));
    }
}


/**
 * 与えられたレシピに，次の調理手順を追加する。
 */
function add_cooking(recipi)
{
    "use strict";

    // 調理法リストからランダムにひとつを選んでコピーする
    method = Object.assign({}, random.choice(cooking_methods_list));

    // 食材数が十分にあるなら，選ばれた調理法に食材を当てはめて調理する
    if (method.n_ps <= recipi.foodstuffs.length)
    {
        method.ps = random.sample(recipi.ingredients, method.n_ps);
        method.cook(recipi);
        recipi.steps.append(method);
    }
}


/**
 * ファイルからすべての食材リストを生成する
 */
function load_foodstuffs()
{
    "use strict";

    /*
    import csv
    #potato = recipi.Ingredient('じゃがいも', cv2.imread("img/cut_vegetable_potato.png", cv2.IMREAD_UNCHANGED))

    with open('ingredients.dat', 'r', encoding='utf8') as f:
        reader = csv.reader(f)
        for row in reader:
            print(row)
            if len(row) == 2:
                ingredients_list.append(recipi.Ingredient(row[0], cv2.imread('img\\'+row[1], cv2.IMREAD_UNCHANGED)))
    */
}


/**
 * ファイルからすべての調理法のリストを生成する
 *
 */
function load_cookingmethods()
{
    "use strict";

    /*
    import csv

    with open('cooking_methods.dat', 'r', encoding='utf8') as f:
        reader = csv.reader(f)
        for row in reader:
            print(row)
            if len(row) == 3:
                cooking_methods_list.append(recipi.CookingMethod('_', getattr(methods, row[1]), row[0], int(row[2])))
    */
}
