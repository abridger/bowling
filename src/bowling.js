function Player(name) {
  this.name = name;
};

function Scoresheet(player) {
  this.player = player;
};

Scoresheet.prototype.FRAMES = {
  'round1'  : [0,0],
  'round2'  : [0,0],
  'round3'  : [0,0],
  'round4'  : [0,0],
  'round5'  : [0,0],
  'round6'  : [0,0],
  'round7'  : [0,0],
  'round8'  : [0,0],
  'round9'  : [0,0],
  'round10' : [0,0,0]
};
