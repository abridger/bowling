describe('Player', function() {

  it('has a name', function() {
    player = new Player("Angus McTavish");
    expect(player.name).toEqual("Angus McTavish");
  });

});

describe('Scoresheet', function(){

  beforeEach(function(){
    player = new Player("Angus McTavish");
    scoresheet = new Scoresheet(player);
  });

  describe('setting up a scoresheet', function() {

    it('has a player', function() {
      expect(scoresheet.player).toEqual(player);
    });

    it('has ten frames', function(){
      expect(Object.keys(scoresheet.FRAMES).length).toEqual(10);
    });

  });

  describe('using the scoresheet', function() {
    beforeEach(function() {
      frame = 'frame1';
      points = 10;
    });

    describe('it should be possible to', function() {
      it('add scores to a frame', function() {
        scoresheet.addPoints(frame, points);
        expect(scoresheet.FRAMES['frame1']).toContain(points)
      });
    });

    describe('it should not be possible to', function() {
      it('add more than two scores to one of the first nine frames', function() {
        for(var i=1; i < 3; i++) {
          scoresheet.addPoints(frame, points);
        }
        expect(scoresheet.FRAMES['frame1'].length).toEqual(2);
      });
    });

  });

});
