let canvas;

let scl = 8;
let offset = 0;

let colors;

function setup(){
	canvas = createCanvas(320, 240);

	colors = {
		sky: 		color("#85ceff"),
		greenery: 	color("#326b15"),
		dirt: 		color("#4f3616"),
		bark: 		color("#8c5435"),
		leaves: 	color("#577d23"),
		sunflower: 	color("#ccd45f"),
		poppy: 		color("#b32917"),
		mushroom: 	color("#c2601f"),
		grass: 		color("#489603")
	}

	noStroke();
}

function draw(){
	background(colors.sky);

	for (let x = - scl * 20; x < width + scl * 20; x += scl){
		let y = getNoise(x);

		fill(colors.greenery);

		rect(x, y + height / 2, scl, scl);

		fill(colors.dirt);

		rect(x, y + height / 2 + scl, scl, scl * 100);

		if (noise(x + offset) * 99 % 1 > 0.96){
			fill(colors.bark);

			rect(x, y + height / 2, scl, -scl * 7);

			fill(colors.leaves);

			rect(x - scl * 2, y + height / 2 - scl * 7, scl * 5, scl);
			rect(x - scl, y + height / 2 - scl * 8, scl * 3, scl);
			rect(x, y + height / 2 - scl * 9, scl, scl);
		} else if (noise(x + offset) * 99 % 1 < 0.96 && noise(x + offset) * 99 % 1 > 0.95){
			fill(colors.sunflower);

			rect(x, y + height / 2 - scl * 2, scl, scl);

			fill(colors.grass);

			rect(x + scl / 4, y + height / 2 - scl, scl / 2, scl);
		} else if (noise(x + offset) * 99 % 1 < 0.95 && noise(x + offset) * 99 % 1 > 0.94){
			fill(colors.poppy);

			rect(x, y + height / 2 - scl * 2, scl, scl);

			fill(colors.grass);

			rect(x + scl / 4, y + height / 2 - scl, scl / 2, scl);
		} else if (noise(x + offset) * 99 % 1 < 0.94 && noise(x + offset) * 99 % 1 > 0.93){
			fill(colors.mushroom);

			rect(x, y + height / 2 - scl * 2, scl, scl, 5, 5, 0, 0);
			rect(x + scl / 4, y + height / 2 - scl, scl / 2, scl);
		} else if (noise(x + offset) * 99 % 1 < 0.93 && noise(x + offset) * 99 % 1 > 0.60){
			fill(colors.grass);

			triangle(x, y + height / 2, x + scl / 2, y + height / 2 - scl, x + scl, y + height / 2);
		}
	}

	keys();
}

function getNoise(x){
	return floor(noise((x + offset) / scl / 30) * 12) * scl;
}

function keys(){
	if (keyIsDown(LEFT_ARROW)){
		offset -= scl;
	} else if (keyIsDown(RIGHT_ARROW)){
		offset += scl;
	}
}