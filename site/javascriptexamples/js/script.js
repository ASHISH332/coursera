// var x=["ashish","kumar","Jason","piyush","jack"];
// for (var prop in x){
//    if(x[prop].startsWith('j') || x[prop].startsWith('J')){
//       console.log("goodbye  " + x[prop]);
//      }
//       else{
//            console.log("hello  " + x[prop]);
// 		}
// }


// // var x=["ashish","kumar","piyush","jack"];
// // for (var i=0;i<x.length;i++){
// // console.log(x[i]);
// // }



// ---------------------------------------------

(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var prop in names){
   if(names[prop].startsWith('j') || names[prop].startsWith('J')){
      console.log("goodbye  " + names[prop]);
     }
      else{
           console.log("hello  " + names[prop]);
		}
}

})();
