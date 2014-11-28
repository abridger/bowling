describe('Player', function() {

  it('has a name', function() {
    player = new Player("Angus McTavish");
    expect(player.name).toEqual("Angus McTavish");
  });

});

describe('Scoresheet', function(){

  describe('setting up a scoresheet', function() {

    beforeEach(function(){
      player = new Player("Angus McTavish");
      scoresheet = new Scoresheet(player);
    });

    it('has a player', function() {
      expect(scoresheet.player).toEqual(player);
    });

    it('has ten frames', function(){
      expect(Object.keys(scoresheet.FRAMES).length).toEqual(10);
    });

    it('the first nine frames must have two scores', function() {
      for(var key in scoresheet.FRAMES) {
        if (key !== 'round10') expect(scoresheet.FRAMES[key].length).toEqual(2);
      };
    });

    it('the tenth frame must have three scores', function() {
      expect(scoresheet.FRAMES['round10'].length).toEqual(3);
    });

  });

});
