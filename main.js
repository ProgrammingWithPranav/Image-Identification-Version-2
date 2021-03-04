Webcam.set({
  width: 300,
  height: 300,
  image_format: "png",
  png_quality: 900,
  constraints: {
    facingMode: "environment",
  },
});
Webcam.attach("webcam");

function captureImage() {
  Webcam.snap(function (data_uri) {
    document.getElementById("snapshot").innerHTML =
      '<img id="myImg" src="' + data_uri + '" />';
  });
}

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
  console.log("Model Loaded");
}

function check() {
  myImg = document.getElementById("myImg");
  classifier.classify(myImg, anyName);
}

function anyName(error, results) {
    if(error == null) {
        document.getElementById("resultValue").innerHTML = results[0].label;
    }
}
