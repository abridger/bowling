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

  describe('scoring', function() {
    describe('it should calculate', function() {
      it('the cumulative score for each frame', function() {
        scoresheet2 = new Scoresheet(player);
        scoresheet2.addPoints(0, 1);
        scoresheet2.addPoints(0, 4);
        scoresheet2.addPoints(1, 4);
        scoresheet2.addPoints(1, 5);
        scoresheet2.addPoints(2, 6);
        scoresheet2.addPoints(2, 4);
        scoresheet2.addPoints(3, 5);
        scoresheet2.addPoints(3, 5);
        scoresheet2.addPoints(4, 10);
        scoresheet2.addPoints(5, 0);
        scoresheet2.addPoints(5, 1);
        scoresheet2.addPoints(6, 7);
        scoresheet2.addPoints(6, 3);
        scoresheet2.addPoints(7, 6);
        scoresheet2.addPoints(7, 4);
        scoresheet2.addPoints(8, 10);
        scoresheet2.addPoints(9, 2);
        scoresheet2.addPoints(9, 8);
        scoresheet2.addPoints(9, 6);
        scoresheet2.cumulativeTotal();
        expect(scoresheet2.FRAMES[0]['total']).toBe(5);
        expect(scoresheet2.FRAMES[1]['total']).toBe(14);
        expect(scoresheet2.FRAMES[2]['total']).toBe(29);
        expect(scoresheet2.FRAMES[3]['total']).toBe(49);
        expect(scoresheet2.FRAMES[4]['total']).toBe(60);
        expect(scoresheet2.FRAMES[5]['total']).toBe(61);
        expect(scoresheet2.FRAMES[6]['total']).toBe(77);
        expect(scoresheet2.FRAMES[7]['total']).toBe(97);
        expect(scoresheet2.FRAMES[8]['total']).toBe(117);
        expect(scoresheet2.FRAMES[9]['total']).toBe(133);
      });
    });
  });

  describe('using the scoresheet', function() {
    describe('it should be possible to', function() {
      beforeEach(function() {
        for(var i=1; i < 4; i++) {
          scoresheet.addPoints(0, 1);
          scoresheet.addPoints(9, 10);
        }
      });

      it('add scores to a frame', function() {
        expect(scoresheet.FRAMES[0]['scores']).toContain(1);
      });

      it('add three scores to the final frame', function() {
        expect(scoresheet.FRAMES[9]['scores'].length).toEqual(3);
      });
    });

    describe('it should not be possible to', function() {
      it('add a score higher than ten', function() {

      });
      it('add more than two scores to one of the first nine frames', function() {
        expect(scoresheet.FRAMES[0]['scores'].length).toEqual(2);
      });
      it('add more than three scores to the final frame', function() {
        expect(scoresheet.FRAMES[9]['scores'].length).toEqual(3);
      });
    });
  });
});
