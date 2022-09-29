
console.log('This is myScript');
function myFunction() {
    document.getElementById('myName').innerHTML = 'Shubham Patil';
    x++;
    console.log(x);
    if (x === 20) {
        document.getElementById('name').innerHTML = 'Stop';
    }
}


function add(a, b) {
    console.log(a);
    return a + b;
}

const helmet = {
    size: "medium", color: "Black", brand: "steelbird",
    purpose: function(){ return "Protects from damage."}
};
function getHelmet() {
    console.log(helmet);
    console.log("Giving helmet");
    return helmet;
}