var a = ["a", "b", "c", "d", "e", "f","g","h","i",];
a.push("z");
console.log(a);


a.shift();
console.log(a);


a.unshift("x");
console.log(a);


a.splice(2,3);
console.log(a);

var b = a.splice(2,3);
console.log(a);
console.log(b);


var b = a.slice(2,3);
console.log(b);


a.splice(2, 1, "x", "y", "z",);
console.log(a);

var i = a.indexOf("c");
var b = a.length;
console.log(b);



for(var i = 0; i < 10; i++){
    console.log("abc");
}



for(var i = 0; i < 10; i++){
    console.log("2 x " + (i + 1) + " = " + 2 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("3 x " + (i + 1) + " = " + 3 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("4 x " + (i + 1) + " = " + 4 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("5 x " + (i + 1) + " = " + 5 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("6 x " + (i + 1) + " = " + 6 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("7 x " + (i + 1) + " = " + 7 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("8 x " + (i + 1) + " = " + 8 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("9 x " + (i + 1) + " = " + 9 * (i + 1));
}

for(var i = 0; i < 10; i++){
    console.log("10 x " + (i + 1) + " = " + 10 * (i + 1));
}