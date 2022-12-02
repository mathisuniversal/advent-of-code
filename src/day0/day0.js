import {Canvas} from "../visualization/visualization.js";
import {INPUT} from "./input.js";

const input = INPUT.split('\n');
document.getElementById('solution').innerText = input.join(', ');

const canvas = new Canvas();
canvas.drawLine(0, 0, 40, 40);
canvas.setColor('red');
canvas.drawDot(50, 50);