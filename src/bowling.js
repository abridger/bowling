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
  if(frame === 9) {
    if(this.FRAMES[frame]['scores'].length < 3)
      this.FRAMES[frame]['scores'].push(points);
  } else {
    if(this.FRAMES[frame]['scores'].length < 2)
      this.FRAMES[frame]['scores'].push(points);
  }
};

Scoresheet.prototype.sumPoints = function(){
  var cumulativeTotal = 0;

  for (var frame in this.FRAMES) {

    var currentFrame = this.FRAMES[frame];
    var currentFrameIndex = this.FRAMES.indexOf(currentFrame);
    var nextFrameIndex = currentFrameIndex + 1;
    var nextFrame = this.FRAMES[nextFrameIndex];

    if (currentFrame['scores'].length !== 0) {
      var frameTotal = currentFrame['scores'].reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
      });
    };

    if (currentFrame !== this.FRAMES[9]) {
      if (currentFrame['scores'][0] === 10) {
        var bonus = nextFrame['scores'][0] + nextFrame['scores'][1];
        frameTotal = frameTotal + bonus;
      } else if (frameTotal === 10) {
        var bonus = nextFrame['scores'][0];
        frameTotal = frameTotal + bonus;
      };
    };

    cumulativeTotal = cumulativeTotal + frameTotal;
    currentFrame['total'] = cumulativeTotal;

  }
};
