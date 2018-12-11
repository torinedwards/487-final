$(document).ready(function() {
  console.log('Ready to begin the test...');

  $( ".mobile-btn" ).click(function() {
    $( "#container" ).toggle();
  });
  var student = {name:"Brenda",
                 age:"20",
                 likesCoding: true
           };
function test() {
  if (student.likesCoding) {
    console.log(student.name, student.age)
  }
}


test();
  });
