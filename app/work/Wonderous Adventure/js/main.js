$(function(){

  //make player object

  //make dice object
    function diceRoll() {
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        $('#dice-button').on('click', function(){
            $('#dice-div').append('<p>' + randomNumber + '</p>')
        })
    }

    //dice roll function



    // confirm('Hey stranger, are you ready for a wondorous adventure?')
    var age = prompt ('How old are you? I can\'t take any children on this dangerous adventure')

    if ( age < 18 ) {
        $('#adventure-story').html('<p>Whoa, you are so young, but if you must come then I dont want to hear any attitude from your parents if you lose a foot or whatever.</p>').append();
    } else if ( age < 39 ) {
        $('#adventure-story').html('<p>The time has come for your journey to begin. I hope you brought your passport.</p>').append();
    } else {
        $('#adventure-story').html('Are you sure you are gonna make it through another adventure bro? You look like you have seen a few already. Fuck, just get your shit together and try not to die of old age.').append();
    }

// $('#adventure-story').html().append();



    // if (rollTheDiceBitch === 20) {
    //     $('#adventure-story').append('<p>It\'s your lucky day! A gentleman walks past and hands you a newspaper. Inside it a hand drawn map with the words "Moustache Wax" scrawled above. You take this as a good omen.</p>')
    // } else if (rollTheDiceBitch < 20 && rollTheDiceBitch > 10) {
    //     $('#adventure-story').append('<p>You get given a free Costa voucher. SCORE!</p>')
    // } else {
    //     $('#adventure-story').append('<p>Nothing to see here, move along.</p>')
    // }




});
