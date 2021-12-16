const canvaBlockEl = document.getElementById('canva-block');
const ctx = canvaBlockEl.getContext('2d');
const clearBtnEl = document.querySelector('#clear-btn');
const instrumentEl = document.getElementById('instrument');
const inputColorEl = document.getElementById('color');
const sizeEl = document.getElementById('size');
const canvaW = canvaBlockEl.width = 640;
const canvaH = canvaBlockEl.height = 480;

canvaBlockEl.addEventListener('mousemove', onMousePaint);
clearBtnEl.addEventListener('click', onBtnClear);

function onMousePaint(e) {
	if (e.buttons === 1 && instrumentEl.value === 'Pen') {
		ctx.strokeStyle = `${inputColorEl.value}`;
		ctx.lineCap = 'round';
		ctx.lineWidth = `${sizeEl.value}`;
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
		ctx.lineTo(e.offsetX - e.movementX, e.offsetY - e.movementY);
		ctx.stroke();
		ctx.closePath();
	} else if (e.buttons === 1 && instrumentEl.value === 'Eraser') {
		ctx.clearRect(e.offsetX - e.movementX, e.offsetY - e.movementY, `${sizeEl.value}`, `${sizeEl.value}`);
	}
}

function onBtnClear(e) {
	ctx.clearRect(0, 0, canvaBlockEl.width, canvaBlockEl.height);
}
