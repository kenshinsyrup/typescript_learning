// Function
function myAdd(x, y) {
    console.log(x + y);
}
myAdd(1, 2);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
let colorName = Color[2];
console.log(colorName);
// Any 可以让TS编译器在编译时放弃类型检查从而通过编译
let notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
notSure = false; // okay, definitely a boolean
console.log(notSure);
// 相比之下，Object类型是没有Any这种特性的，如果属性或者方法不存在，是不能对Object类型的变量调用的
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
/*
let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
*/
// Any 在我们只知道部分类型而不是全部类型的时候很有用，比如元素类型为Any的数组可以保存多种类型的变量
let list = [1, true, "free"];
console.log(list);
list[1] = 100;
console.log(list);
