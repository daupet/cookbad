var canvas;
var dish; // 完成画像を描画するためのグラフィックバッファ

function setup()
{
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

}
