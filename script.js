var chess = "";
var even = "# # # # ";
var odd = " # # # #";

for ( var i = 0; i < 9; i++ ) {

    if ( i % 2 === 0 ) chess += even + "\n";
    else chess += odd + "\n";
}

console.log(chess);
