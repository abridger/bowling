describe('Player', function() {

  it('has a name', function() {
    player = new Player("Angus McTavish");
    expect(player.name).toEqual("Angus McTavish");
  });

});

describe('Game', function(){

  describe('starting the game', function() {

    it('has a name', function() {
      player = new Player("Angus McTavish");
      game = new Game(player);
      expect(game.player).toEqual(player);
    });

  });

});
