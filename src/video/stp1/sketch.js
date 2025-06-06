let video;

function setup() {
  createCanvas(800, 400);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();
  video.size(64, 48);
  console.log(video);
}

function draw() {
  //background(220);
  let aspectRatioCanvas = width / height;
  let aspectRatioVideo = video.width / video.height;
  let newWidth, newHeight;
  let zeroX, zeroY;
  if (aspectRatioCanvas > aspectRatioVideo) {
    newWidth = width;
    newHeight = newWidth / aspectRatioVideo;
  } else {
    newHeight = height;
    newWidth = newHeight / aspectRatioVideo;
  }
  zeroX = (width - newWidth) / 20;
  zeroY = (height - newHeight) / 20;

  image(video, zeroX, zeroY, newWidth, newHeight);
  fill('red');
  circle(mouseX, mouseY, 50);
}
