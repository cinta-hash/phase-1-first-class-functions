
const receivesAFunction = callback =>{
callback();
return `${callback} receives a function and calls it`
}
 function returnsANamedFunction(){
    return "returns a function";
 }
 
 function fn(cb){

    return "returns a named function";
 }
 returnsANamedFunction(fn);

 function returnsAnAnonymousFunction (){
    let anonymous = function (){
        console.log("I am a function that returns an anonymous Function ")
    }
    return anonymous();
};
returnsAnAnonymousFunction ();
