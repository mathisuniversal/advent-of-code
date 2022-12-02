export class Canvas {
    canvas;
    ctx;

    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");

        this.fillBackgroundWithBlack('black');
        this.setColor('white');
    }

    drawDot(x, y) {
        this.adjustSize(x, y);

        this.ctx.fillRect(x, y, 1, 1);
    }

    drawLine(x1, y1, x2, y2) {
        this.adjustSize(Math.max(x1, x2), Math.max(y1, y2));

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }

    adjustSize(x, y) {
        let temp = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const fillStyleBackup = this.ctx.fillStyle;
        const strokeStyleBackup = this.ctx.strokeStyle;

        this.canvas.width = Math.max(this.canvas.width, x);
        this.canvas.height = Math.max(this.canvas.height, y);

        this.fillBackgroundWithBlack();

        this.ctx.fillStyle = fillStyleBackup;
        this.ctx.strokeStyle = strokeStyleBackup;
        this.ctx.putImageData(temp, 0, 0);
    }

    fillBackgroundWithBlack() {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setColor(color) {
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
    }

}


