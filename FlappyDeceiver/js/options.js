var touchControls = false;
var audioOn = true;

var optionsState = {
    create: function(){
        background = game.add.sprite(0, 0, 'menuBackground');

        var backx = game.width/2 - game.cache.getImage('start').width/2;
        var backy = game.height/2 + game.cache.getImage('start').height;
        backButton = game.add.button(backx, backy, 'back', null, this);
        backButton.onInputDown.add(backClick, this);
        backButton.onInputUp.add(backRelease, this);

        var keyboardButtonx = game.width/2 - game.cache.getImage('start').width/2 - 100;
        var keyboardButtony = 100;
        keyboardButton = game.add.button(keyboardButtonx, keyboardButtony, 'KeyboardButton', null, this);
        keyboardButton.onInputDown.add(keyboardClick, this);
        keyboardButton.onInputUp.add(keyboardRelease, this);

        var whyx = keyboardButtonx;
        var whyy = keyboardButtony + 100;
        whyButton = game.add.button(whyx, whyy, 'back',null, this);
        whyButton.onInputDown.add(whyClick, this);
        whyButton.onInputUp.add(whyRelease, this);

        checkmark = game.add.sprite(600, 80, 'checkmark');
        checkmark.scale.set(0.5);

        audioButton = game.add.button(game.width - 125, game.height - 125, 'soundOn', null, this);
        audioButton.scale.setTo(0.25);
        audioButton.onInputUp.add(audioRelease, this);
    }
};

function backClick(){
    backButton.loadTexture('backPressed', 0);
}
function backRelease(){
    game.state.start('menu');
}
function keyboardClick(){
    keyboardButton.loadTexture('KeyboardButtonPressed', 0);
}
function keyboardRelease(){
    keyboardButton.loadTexture('KeyboardButton', 0);
    if(touchControls){
        checkmark.loadTexture('checkmark', 0);
    }
    else{
        checkmark.loadTexture('xmark', 0);
    }
    touchControls = !touchControls;
}

function audioRelease(){
    if(audioOn){
        audioButton.loadTexture('soundOff', 0);
        game.sound.mute = true;
        audioOn = false;
    }
    else{
        audioButton.loadTexture('soundOn', 0);
        game.sound.mute = false;
        audioOn = true;
    }
}

function whyClick(){
    whyButton.loadTexture('backPressed',0);
}
function whyRelease(){
    //game.state.start('why');
}
