var loadState = {
    preload: function(){
        game.stage.backgroundColor = '#85b5e1';

        game.load.image('platform', 'assets/sprites/platform.png');
        game.load.image('grassFloor', 'assets/sprites/grassFloor.png');
        game.load.image('grassPlatform', 'assets/sprites/grassPlatform.png');
        game.load.image('arrow', 'assets/sprites/arrow.png');
        game.load.image('orb', 'assets/sprites/orb-green.png');
        game.load.image('options', 'assets/sprites/optionsButton.png');

        game.load.spritesheet('bird', 'assets/sprites/birds.png', 64, 64, 8);

        game.load.bitmapFont('gem', 'assets/fonts/bitmapFonts/gem.png', 'assets/fonts/bitmapFonts/gem.xml');
    },

    create: function(){
        game.state.start('menu');
    },
};