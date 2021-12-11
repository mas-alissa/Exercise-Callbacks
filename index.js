function makeHomework(course,callback){
setTimeout(() => {
  console.log(`Okay, ok, I'm going to do my ${course} homework now`)
  callback();
},1000)
}

function doneWithHomework(){
  console.log("Look Mom/Dad, i'm done with my hommework!")
}

makeHomework("math",doneWithHomework);