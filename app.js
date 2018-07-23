/*........................
 simple callback example
........................*/

var tcStudents = [
    { name: "Nayem", rank: "mentor" },
    { name: "Sakib", rank: "cr" },
    { name: "Jahid", rank: "cr" },
    { name: "Mushfiq", rank: "student" },
    { name: "Jubayer", rank: "student" },
    { name: "Mr. X", rank: "student" },
    { name: "Mr. Y", rank: "student" }
];


var doSomething = function (data, callback) {
    for (var i = 0; i < data.length; i++) {
        callback(data[i]);
    }
};

doSomething (tcStudents, function(obj){
    if (obj.rank === "student"){
        console.log("One of our student is " + obj.name + " vai");
    }
});

doSomething (tcStudents, function(obj){
    if (obj.rank === "mentor"){
        console.log("Our mentor is " + obj.name);
    }
});









