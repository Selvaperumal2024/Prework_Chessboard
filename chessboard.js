let queen = [{
        direction: 'south',
        position: [3, 0]
    },

    {
        direction: 'north',
        position: [3, 3]
    },
];


function changeDirection(qs, move) {

    var direction = qs.direction;
    switch (direction) {
        case 'South':
        case 'south':
            moveForward(qs.position, direction, move);
            break;

        case 'North':
        case 'north':
            moveBackward(qs.position, direction, move);
            break;
    }
}

function moveForward(position, direction, moves)

{
    x = position[0];
    y = position[1];

    if (direction == "south" || direction == "South") {
        y = y + moves;
    }

    var arr = [x, y];
    queen.position = arr;
    console.log(queen.position);
    updatePosition(arr);

}

function moveBackward(position, direction, moves) {
    x = position[0];
    y = position[1];

    if (direction == "north" || direction == "North") {
        y = y - moves;
    }

    var arr = [x, y];
    queen.position = arr;
    console.log(queen.position);
    updatePosition(arr);
}

function updatePosition(arrs) {
    x = arrs[0];
    y = arrs[1];
    if (x < 0 || y < 0 || x > 7 || y > 7) {
        console.log("Queen is outside");
    } else {
        var positionLog = [
            ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
            ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
            ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
            ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
            ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
            ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
            ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
            ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
        ];
        var x = positionLog[arrs[1]][arrs[0]];
        queen.whereabout = x;
        console.log(x);
        console.log(queen);
    }
}
moves = [2, 2]

for (i = 0; i < queen.length; i++) {
    changeDirection(queen[i], moves[i]);
}