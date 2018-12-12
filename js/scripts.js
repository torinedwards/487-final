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
    console.log(student.name, student.age);
  }
}
test();

// Set up any variables needed
var url = './js/refugees.json';
var origin = [];
var value = [];

// Load the JSON data
$.ajax({
  type: 'GET',
  url: url,
  async: true,
  success: function(data){
    // Console log the data
    console.log(data.length);

    // Callbacks for logic and chart
    buildContent(data);
    // buildChart(data);
  },

  error: function(error) {
    console.log(error);
  },
});

// Function to do logic
function buildContent(data) {
  // Set up a for loop to loop through the data
  for(i = 0; i < data.length; i++) {
    // Push data to different arrays to prepare for chart
    origin.push(data[i].Origin);

    value.push(data[i].Value);
    $( ".cards" ).append( "<div class='blue card" + i + "'" + "></div>" );
    $( ".card" + i ).append( "<h3>"+origin[i]+"</h3>" );
    $( ".card" + i ).append( "<h3>"+value[i]+"</h3>" );

  }
  for(i = 0; i < data.length; i++) {
  }
}

console.log(origin);
console.log(value);



  });
