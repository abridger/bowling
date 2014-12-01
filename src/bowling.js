function Player(name) {
  this.name = name;
};

function Scoresheet(player) {
  this.player = player;
};

Scoresheet.prototype.FRAMES = {
  'frame1'  : {'total' : null, 'scores' : []},
  'frame2'  : {'total' : null, 'scores' : []},
  'frame3'  : {'total' : null, 'scores' : [8]},
  'frame4'  : {'total' : null, 'scores' : [8]},
  'frame5'  : {'total' : null, 'scores' : [8]},
  'frame6'  : {'total' : null, 'scores' : [8]},
  'frame7'  : {'total' : null, 'scores' : [8]},
  'frame8'  : {'total' : null, 'scores' : [8]},
  'frame9'  : {'total' : null, 'scores' : [8]},
  'frame10' : {'total' : null, 'scores' : [8  ]}
};

Scoresheet.prototype.addPoints= function(frame, points){
  if(frame === 'frame10') {
    if(this.FRAMES[frame]['scores'].length < 3)
      this.FRAMES[frame]['scores'].push(points);
  } else {
    if(this.FRAMES[frame]['scores'].length < 2)
      this.FRAMES[frame]['scores'].push(points);
  }
};

Scoresheet.prototype.sumPoints = function(){
  var accumulator = 0;

  for (var frame in this.FRAMES) {

    var targetFrame = this.FRAMES[frame]

    var sum = targetFrame['scores'].reduce(function(previousValue, currentValue){
      return previousValue + currentValue;
    });

    targetFrame['total'] = sum;
    accumulator = accumulator + sum;

    console.log(targetFrame);
    console.log(accumulator);

    // Need to include bonuses for strikes and half strikes.
  }
};
