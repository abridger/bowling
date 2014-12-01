function Player(name) {
  this.name = name;
};

function Scoresheet(player) {
  this.player = player;
};

Scoresheet.prototype.FRAMES = [
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []},
  {'total' : null, 'scores' : []}
];

Scoresheet.prototype.addPoints= function(frame, points){
  var currentScore = this.FRAMES[frame]['scores'];
  if(frame === 9) {
    if(currentScore.length < 3)
      currentScore.push(points);
  } else {
    if(currentScore.length < 2)
      currentScore.push(points);
  }
};

var frameTotal = 0;

Scoresheet.prototype.sumPoints = function(currentFrame){
  if (currentFrame['scores'].length !== 0) {
    frameTotal = currentFrame['scores'].reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    });
  };
};

Scoresheet.prototype.checkBonus = function(currentFrame, nextFrame){
  if (currentFrame !== this.FRAMES[9]) {
    if (currentFrame['scores'][0] === 10) {
      var bonus = nextFrame['scores'][0] + nextFrame['scores'][1];
      frameTotal = frameTotal + bonus;
    } else if (frameTotal === 10) {
      var bonus = nextFrame['scores'][0];
      frameTotal = frameTotal + bonus;
    };
  };
};

Scoresheet.prototype.cumulativeTotal = function(){
  var accumulator = 0;
  for (var frame in this.FRAMES) {
    var currentFrame = this.FRAMES[frame];
    var currentFrameIndex = this.FRAMES.indexOf(currentFrame);
    var nextFrameIndex = currentFrameIndex + 1;
    var nextFrame = this.FRAMES[nextFrameIndex];
    this.sumPoints(currentFrame);
    this.checkBonus(currentFrame, nextFrame);
    accumulator = accumulator + frameTotal;
    currentFrame['total'] = accumulator;
  }
};
