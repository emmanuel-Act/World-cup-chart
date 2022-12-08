//for Group A
function onFormSubmit1(){
  if(document.getElementById("country1").value == "" || document.getElementById("point1").value == ""){
      alert("Both input fields can not be empty!");
  }
  else{
      var formData1 = readFormData1();
      insertNewRecord1(formData1);
      resetForm1();
  }
}


function readFormData1(){
  var formData1 = {};
  formData1["country1"] = document.getElementById("country1").value;
  formData1["point1"] = document.getElementById("point1").value;

  return formData1;
}

function insertNewRecord1(data){
  

    var table = document.getElementById("display1").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.country1;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.point1;
    
  }


function resetForm1(){
  document.getElementById("country1").value = "";
  document.getElementById("point1").value = "";
}




//for Group B

function onFormSubmit2(){
  if(document.getElementById("country2").value == "" || document.getElementById("point2").value == ""){
      alert("Both input fields can not be empty!");
  }
  else{
      var formData2 = readFormData2();
      insertNewRecord2(formData2);
      resetForm2();
  }
}


function readFormData2(){
  var formData2 = {};
  formData2["country2"] = document.getElementById("country2").value;
  formData2["point2"] = document.getElementById("point2").value;

  return formData2;
}

function insertNewRecord2(data){
  

    var table = document.getElementById("display2").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.country2;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.point2;
    
  }


function resetForm2(){
  document.getElementById("country2").value = "";
  document.getElementById("point2").value = "";
}



//for Group C

function onFormSubmit3(){
  if(document.getElementById("country3").value == "" || document.getElementById("point3").value == ""){
      alert("Both input fields can not be empty!");
  }
  else{
      var formData3 = readFormData3();
      insertNewRecord3(formData3);
      resetForm3();
  }
}


function readFormData3(){
  var formData3 = {};
  formData3["country3"] = document.getElementById("country3").value;
  formData3["point3"] = document.getElementById("point3").value;

  return formData3;
}

function insertNewRecord3(data){
  

    var table = document.getElementById("display3").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.country3;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.point3;
    
  }


function resetForm3(){
  document.getElementById("country3").value = "";
  document.getElementById("point3").value = "";
}

//for Group D

function onFormSubmit4(){
  if(document.getElementById("country4").value == "" || document.getElementById("point4").value == ""){
      alert("Both input fields can not be empty!");
  }
  else{
      var formData4 = readFormData4();
      insertNewRecord4(formData4);
      resetForm4();
  }
}

function readFormData4(){
  var formData4 = {};
  formData4["country4"] = document.getElementById("country4").value;
  formData4["point4"] = document.getElementById("point4").value;

  return formData4;
}

function insertNewRecord4(data){
  

    var table = document.getElementById("display4").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.country4;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.point4;
    
  }


function resetForm4(){
  document.getElementById("country4").value = "";
  document.getElementById("point4").value = "";
}

//chart

const ctx1 = document.getElementById('myChart');
const countries1 = [];
const points1 = [];

function count_submit1 (){

countries1.push(document.getElementById("country1").value);
points1.push(document.getElementById("point1").value);
 
}
function dispchart1 (){   
  if (countries1.length == 0){
    alert("There's no data for the chart to display!");
  }
  else{
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: countries1,
      datasets: [{
        label: 'points',
        data: points1,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
}

const ctx2 = document.getElementById('myChart');
const countries2 = [];
const points2 = [];


function count_submit2 (){
 
  countries2.push(document.getElementById("country2").value);
  points2.push(document.getElementById("point2").value);
   
  }

  function dispchart2 (){   
    if (countries2.length == 0){
      alert("There's no data for the chart to display!");
    }
    else{
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: countries2,
        datasets: [{
          label: 'points',
          data: points2,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

const ctx3 = document.getElementById('myChart');
const countries3 = [];
const points3 = [];


function count_submit3 (){
  countries3.push(document.getElementById("country3").value);
  points3.push(document.getElementById("point3").value);
   
    }

    function dispchart3 (){   
      if (countries3.length == 0){
        alert("There's no data for the chart to display!");
      }
      else{
      new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: countries3,
          datasets: [{
            label: 'points',
            data: points3,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
 }

const ctx4 = document.getElementById('myChart');
const countries4 = [];
const points4 = [];


function count_submit4 (){

  countries4.push(document.getElementById("country4").value);
  points4.push(document.getElementById("point4").value);
  } 
 


function dispchart4 (){   
  if (countries4.length == 0){
    alert("There's no data for the chart to display!");
  }
  else{
      new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: countries4,
          datasets: [{
            label: 'points',
            data: points4,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  }
 }

 