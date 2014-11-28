describe('Player', function() {

  it('has a name', function() {
    player = new Player("Angus McTavish");
    expect(player.name).toEqual("Angus McTavish");
  });

});

describe('Game', function(){

  describe('initialising the game', function() {

    beforeEach(function(){
      player = new Player("Angus McTavish");
      game = new Game(player);
    });

    it('has a player', function() {
      expect(game.player).toEqual(player);
    });

    it('has ten frames', function(){
      expect(Object.keys(game.FRAMES).length).toEqual(10);
    });

    it('the first nine frames must have two scores', function() {
      for(var key in game.FRAMES) {
        if (key !== 'round10') expect(game.FRAMES[key].length).toEqual(2);
      };
    });

    it('the tenth frame must have three scores', function() {
      expect(game.FRAMES['round10'].length).toEqual(3);
    });

  });

});
