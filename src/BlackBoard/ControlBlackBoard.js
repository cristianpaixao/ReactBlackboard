import { saveAs } from 'file-saver';

let canvas, 
    ctx, 
    flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false,
    x = "#f0f0f0",
    y = 2;

export function color(obj) {
    switch (obj.id) {
        case "light-grey":
            x = "#7e7e7e";
            break;
        case "blue":
            x = "#1BB6ED";
            break;
        case "dark-blue":
            x = "#0D4DA2";
            break;
        case "purple":
            x = "#9E7EB8";
            break;
        case "pink":
            x = "#F9ACC6";
            break;
        case "red":
            x = "#C71030";
            break;
        case "orange":
            x = "#F37041";
            break;
        case "yellow":
            x = "#FFD701";
            break;
        case "green":
            x = "#C1D62D";
            break;
        case "dark-green":
            x = "#5E9734";
            break;
        case "eraser":
            x = "#0F0F0F";
            break;
        default:
            x = "#f0f0f0";
    }
    if (x === "#0F0F0F") y = 14;
    else y = 2;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

export function erase() {
    let confirm = window.confirm("Você tem certeza? Isso ira apagar tudo!")
    if (confirm) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }    
}

export function save() {
    let d = new Date();
    let dateTime = d.getTime();
    canvas.toBlob(function(blob) {
        saveAs(blob, `blackboard_${dateTime}.png`);
    });
}

function findxy(res, e) {
    if (res === 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res === 'up' || res === "out") {
        flag = false;
    }
    if (res === 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

export function init() {
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext("2d");
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.fillStyle = 'rgb(15,15,15)';
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

export function showHideOptions() {
    let options = document.getElementById('blackBoardOptions');
    if (options.style.display === 'block') {
        options.style.display = 'none'
        return;
    }
    options.style.display = 'block'
}