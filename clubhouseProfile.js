
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
  document.getElementById("imageDiv").style.borderWidth = ((this.value) / 4) + 'px';
}

function colorChange(){
  var color = document.getElementById("colorPicker").value;
  document.getElementById("imageDiv").style.borderColor = color;
  document.getElementById("colorPicker").style.backgroundColor = color;
  document.getElementById("colorPicker").style.color = color;
}

function fileUpload(event){
  var reader = new FileReader();
  var img = document.createElement("img");
  reader.onload = function( e ){
    img.src = e.target.result;

    img.onload = function(){
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var MAX_WIDTH = 140;
      var MAX_HEIGHT = 140;
      var width = this.width;
      var height = this.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      var dataUrl = canvas.toDataURL("image/png");
      //document.getElementById("imageDiv").style.backgroundImage = "url("+e.target.result+")";
      document.getElementById("imageDiv").style.backgroundImage = "url("+dataUrl+")";
      document.getElementById("fileUploadLabel").style.display = "none";
    }
  }
  reader.readAsDataURL(document.getElementById("fileUpload").files[0])
}

function imageUpload(){
  document.getElementById("fileUpload").click();
}


function downloadDiv(){
  var div = document.getElementById("imageDiv");
  html2canvas(div).then(function(canvas){
    var myImage = canvas.toDataURL();
    downloadURI(myImage, "MaSimulation.png");
  });
}

function downloadURI(uri, name){
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}
