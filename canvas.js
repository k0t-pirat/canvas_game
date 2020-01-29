const FULL_CIRCLE_ANGLE = Math.PI * 2;
const CENTER_X = 50;
const CENTER_Y = 50;
const RADIUS = 25;
const START_ANGLE = 0;
const END_ANGLE = FULL_CIRCLE_ANGLE;


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(CENTER_X, CENTER_Y, RADIUS, START_ANGLE, END_ANGLE);
ctx.stroke();

ctx.beginPath();
ctx.arc(CENTER_X + CENTER_X / 6, CENTER_Y - CENTER_Y / 6, RADIUS / 4, START_ANGLE, END_ANGLE);
ctx.stroke();
