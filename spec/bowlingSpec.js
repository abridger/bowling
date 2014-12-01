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
      for(var i=1; i < 4; i++) {
        scoresheet.addPoints('frame1', 10);
        scoresheet.addPoints('frame10', 10);
      }
    });

    describe('it should be possible to', function() {
      it('add scores to a frame', function() {
        expect(scoresheet.FRAMES['frame1']['scores']).toContain(10)
      });
      it('add three scores to the final frame', function() {
        expect(scoresheet.FRAMES['frame10']['scores'].length).toEqual(3);
      });
    });

    describe('it should not be possible to', function() {
      it('add a score higher than ten', function() {

      });
      it('add more than two scores to one of the first nine frames', function() {
        expect(scoresheet.FRAMES['frame1']['scores'].length).toEqual(2);
      });
      it('add more than three scores to the final frame', function() {
        expect(scoresheet.FRAMES['frame10']['scores'].length).toEqual(3);
      });
    });

  });

  describe('scoring', function() {

    describe('it should calculate', function() {
      it('the cumulative score for each frame', function() {
        scoresheet.addPoints('frame1', 8);
        scoresheet.addPoints('frame1', 8);
        scoresheet.addPoints('frame2', 8);
        scoresheet.sumPoints();
        expect(scoresheet.FRAMES['frame2']['total']).toBe(24);
      });
    });

  });

});
