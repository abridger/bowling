function Player(name) {
  this.name = name;
};

function Scoresheet(player) {
  this.player = player;
};

Scoresheet.prototype.FRAMES = {
  'frame1'  : [],
  'frame2'  : [],
  'frame3'  : [],
  'frame4'  : [],
  'frame5'  : [],
  'frame6'  : [],
  'frame7'  : [],
  'frame8'  : [],
  'frame9'  : [],
  'frame10' : []
};

Scoresheet.prototype.addPoints= function(frame, points){
  if(this.FRAMES[frame].length < 2) this.FRAMES[frame].push(points);
};
