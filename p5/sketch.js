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


}


function draw()
{

}
