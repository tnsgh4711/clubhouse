
// Here we can adjust defaults for all color pickers on page:
jscolor.presets.default = {
  palette: [
    '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26', '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
    '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d', '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
  ],
  //paletteCols: 12,
  //hideOnPaletteClick: true,
  //width: 271,
  //height: 151,
  //position: 'right',
  //previewPosition: 'right',
  //backgroundColor: 'rgba(51,51,51,1)', controlBorderColor: 'rgba(153,153,153,1)', buttonColor: 'rgba(240,240,240,1)',
}

var slider = document.getElementById("myRange");

slider.oninput = function() {

  //document.getElementById("image").style.width = (120 - this.value) + 'px';
  //document.getElementById("image").style.height = (120 - this.value) + 'px';
  //document.getElementById("image").style.borderWidth = (120 - this.value) + 'px';
  document.getElementById("imageDiv").style.borderWidth = ((120 - this.value) / 2) + 'px';
}

function colorChange(){
  var color = document.getElementById("colorPicker").value;
  document.getElementById("imageDiv").style.borderColor = color;
  document.getElementById("colorPicker").style.backgroundColor = color;
  document.getElementById("colorPicker").style.color = color;
}

function fileUpload(event){
  var reader = new FileReader();
  reader.onload = function( e ){
    document.getElementById("imageDiv").style.backgroundImage = "url("+e.target.result+")";
    document.getElementById("fileUploadLabel").style.display = "none";
  }
  reader.readAsDataURL(document.getElementById("fileUpload").files[0])
}

function imageUpload(){
  document.getElementById("fileUpload").click();
}
