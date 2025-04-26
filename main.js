<<<<<<< HEAD
// get reference to canvas
var canvas = document.getElementById('canvas');

//get reference to canvas context
var context = canvas.getContext('2d');

//initialize loading variables
var load_counter = 0;

//intialize images for layers
var background = new Image();
var mountains = new Image();
var castleshadow = new Image();
var castle = new Image();
var handshadow = new Image();
var hand = new Image();
var cloud = new Image();
var sparkles = new Image();
var bordershadow = new Image();
var border = new Image();

//create a list of layer objects
var layer_list = [
    {
        'image': background,
        'src': './images/layer_1_1.png',
        'z_index': .05,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': mountains,
        'src': './images/layer_2_1.png',
        'z_index': .15,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': castleshadow,
        'src': './images/layer_3_1.png',
        'z_index': .2,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': .2
    },
    {
        'image': castle,
        'src': './images/layer_4_1.png',
        'z_index': .25,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': handshadow,
        'src': './images/layer_5_1.png',
        'z_index': 1.5,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': .45
    },
    {
        'image': hand,
        'src': './images/layer_6_1.png',
        'z_index': 1.75,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': cloud,
        'src': './images/layer_7_1.png',
        'z_index': 1.9,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 0.94
    },
    {
        'image': sparkles,
        'src': './images/layer_8_1.png',
        'z_index': 2.25,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': bordershadow,
        'src': './images/layer_9_1.png',
        'z_index': 0,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
    {
        'image': border,
        'src': './images/layer_10_1.png',
        'z_index': 0,
        'position': {x:0, y:0},
        'blend': 'normal',
        'opacity': 1
    },
];

layer_list.forEach(function(layer,index) {
    layer.image.onload=function() {
        load_counter += 1;
        if (load_counter >= layer_list.length) {
            requestAnimationFrame(drawCanvas);
        }
    }
    layer.image.src = layer.src;
});

function drawCanvas() {
    //clear whatever is in the canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    //loop through each layer and draw it to the canvas
    layer_list.forEach(function(layer,index) {

        layer.position = getOffset(layer);

        if (layer.blend) {
            context.globalCompositeOperation = layer.blend;
        } else {
            context.globalCompositeOperation = 'normal';
        }

        context.globalAlpha = layer.opacity;

        context.drawImage(layer.image, layer.position.x, layer.position.y);
});
requestAnimationFrame(drawCanvas);
}

function getOffset(layer) {
    var touch_multiplier = 0.2;
    var touch_offset_x = pointer.x * layer.z_index * touch_multiplier;
    var touch_offset_y = pointer.y * layer.z_index * touch_multiplier;

    var offset = {
        x: touch_offset_x,
        y: touch_offset_y
    };

    return offset;
}


//// TOUCH AND MOUSE CONTROLS ////

var moving = false;

// intialize touch and mouse position
var pointer_initial = {
    x:0,
    y:0
};

var pointer = {
    x:0,
    y:0
};

canvas.addEventListener('touchstart', pointerStart);
canvas.addEventListener('mousedown', pointerStart);

function pointerStart(event) {
    moving = true;
    if (event.type === 'touchstart') {
        pointer_initial.x = event.touches [0].clientX;
        pointer_initial.y = event.touches [0].clientY;
    } else if (event.type === 'mousedown') {
        pointer_initial.x = event.clientX;
        pointer_initial.y = event.clientY;
    }
}

window.addEventListener('touchmove', pointerMove);
window.addEventListener('mousemove', pointerMove);

function pointerMove(event) {
    event.preventDefault();
    if (moving === true) {
        var current_x = 0;
        var current_y = 0;
        if (event.type === 'touchmove') {
            current_x = event.touches[0].clientX;
            current_y = event.touches[0].clientY;
        } else if (event.type === 'mousemove') {
            current_x = event.clientX;
            current_y = event.clientY;
        }
        pointer.x = current_x - pointer_initial.x;
        pointer.y = current_y - pointer_initial.y;
    }
}

canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
});

canvas.addEventListener('mousemove', function(event) {
    event.preventDefault();
});

window.addEventListener('touchend', function(event) {
    endGesture();
});

window.addEventListener('mouseup', function(event) {
    endGesture();
});

function endGesture() {
    moving = false;

    pointer.x = 0;
    pointer.y = 0;
=======
// get reference to canvas
var canvas = document.getElementById('canvas');

//get reference to canvas context
var context = canvas.getContext('2d');

//initialize loading variables
var load_counter = 0;

//intialize images for layers
var background = new Image();
var mountains = new Image();
var castle = new Image();
var hand = new Image();
var cloud = new Image();
var sparkles = new Image();
var border = new Image();

//create a list of layer objects
var layer_list = [
    {
        'image': background,
        'src': './images/layer_1_1.png',
        'z_index': -3,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': mountains,
        'src': './images/layer_2_1.png',
        'z_index': -2.9,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': castle,
        'src': './images/layer_3_1.png',
        'z_index': -2.8,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': hand,
        'src': './images/layer_4_1.png',
        'z_index': -1.5,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': cloud,
        'src': './images/layer_5_1.png',
        'z_index': -1,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 0.9
    },
    {
        'image': sparkles,
        'src': './images/layer_6_1.png',
        'z_index': -.75,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
    {
        'image': border,
        'src': './images/layer_7_1.png',
        'z_index': 0,
        'position': {x:0, y:0},
        'blend': null,
        'opacity': 1
    },
];

layer_list.forEach(function(layer,index) {
    layer.image.onload=function() {
        load_counter += 1;
        if (load_counter >= layer_list.length) {
            requestAnimationFrame(drawCanvas);
        }
    }
    layer.image.src = layer.src;
});

function drawCanvas() {
    //clear whatever is in the canvas
    context.clearRect(0,0, canvas.width, canvas.height);

    //loop through each layer and draw it to the canvas
    layer_list.forEach(function(layer,index) {

        layer.position = getOffset(layer);

        if (layer.blend) {
            context.globalCompositeOperation = layer.blend;
        } else {
            context.globalCompositeOperation = 'normal';
        }

        context.globalAlpha = layer.opacity;

        context.drawImage(layer.image, layer.position.x, layer.position.y);
});
requestAnimationFrame(drawCanvas);
}

function getOffset(layer) {
    var touch_multiplier = 0.2;
    var touch_offset_x = pointer.x * layer.z_index * touch_multiplier;
    var touch_offset_y = pointer.y * layer.z_index * touch_multiplier;

    var offset = {
        x: touch_offset_x,
        y: touch_offset_y
    };

    return offset;
}


//// TOUCH AND MOUSE CONTROLS ////

var moving = false;

// intialize touch and mouse position
var pointer_initial = {
    x:0,
    y:0
};

var pointer = {
    x:0,
    y:0
};

canvas.addEventListener('touchstart', pointerStart);
canvas.addEventListener('mousedown', pointerStart);

function pointerStart(event) {
    moving = true;
    if (event.type === 'touchstart') {
        pointer_initial.x = event.touches [0].clientX;
        pointer_initial.y = event.touches [0].clientY;
    } else if (event.type === 'mousedown') {
        pointer_initial.x = event.clientX;
        pointer_initial.y = event.clientY;
    }
}

window.addEventListener('touchmove', pointerMove);
window.addEventListener('mousemove', pointerMove);

function pointerMove(event) {
    event.preventDefault();
    if (moving === true) {
        var current_x = 0;
        var current_y = 0;
        if (event.type === 'touchmove') {
            current_x = event.touches[0].clientX;
            current_y = event.touches[0].clientY;
        } else if (event.type === 'mousemove') {
            current_x = event.clientX;
            current_y = event.clientY;
        }
        pointer.x = current_x - pointer_initial.x;
        pointer.y = current_y - pointer_initial.y;
    }
}

canvas.addEventListener('touchmove', function(event) {
    event.preventDefault();
});

canvas.addEventListener('mousemove', function(event) {
    event.preventDefault();
});

window.addEventListener('touchend', function(event) {
    endGesture();
});

window.addEventListener('mouseup', function(event) {
    endGesture();
});

function endGesture() {
    moving = false;

    pointer.x = 0;
    pointer.y = 0;
>>>>>>> 07afad13ceb91c7696c3d132dbd8dd4039a83d1e
}