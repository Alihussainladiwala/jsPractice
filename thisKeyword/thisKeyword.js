

const myObj = {
    title: 'abc',
    getThisArrow: ()=> {
        console.log('refers to the window obj')
        console.log(this);
    },
    getThisRegular: function() {
        console.log("normal behaviour");
        console.log(this);
    }


}

myObj.getThisArrow();
myObj.getThisRegular();

console.log("refers to window as expected", this)

function Construct(name){
    console.log(this, name)

}

Construct("Ali");  // refers to window

let obj = new Construct("hussain");  // refers to the newly created construct obj