$(document).ready(function() {
    
    $('#Slaps').hide(); //set up slap animation
    
    var texter = [ //Text Options Array. You can add or subtract all you want
        "Awesome!",
        "You Da Best!",
        "High Five Master!",
        "You Got High Five Skills!",
        "Nice Five!",
        "Spock on!"
    ]; 
    
    var number = 0; //Random Number variable for the array
    var lastNum = 20; //Store last variable after making a new one so we don't have repeats
    var spockCheck = false; //Ooo spock!
    
    function findNum() { //Get the random number
        var randomNum = Math.floor(Math.random() * (5 + 1));
        if (randomNum === lastNum) { //Check for repeats
            findNum(); //loop if repeat
        }
        else{
            lastNum = randomNum;
            number = randomNum;
        }
    }
       
//~~~~~~~~~~~~~~~~    
    
    $('#spocker').on('click', function (e) {
        
        $('#textField').css({top: '300px',opacity: 0}); //set up text animation
        
        $('#Slaps').fadeIn(0).fadeOut('fast'); //Slap animation
        
        findNum();
              
        $('#textField').empty();
        $('#Texter').append($('#textField').text(texter[number]));
        if (number === 5) { //Spock check
            $('#spocker').toggleClass('fa-hand-paper-o').toggleClass('fa-hand-spock-o');  
            spockCheck = true;
        }
        else if (spockCheck === true){
            $('#spocker').toggleClass('fa-hand-paper-o').toggleClass('fa-hand-spock-o');
            spockCheck = false;
        }
        
        $('#textField').animate({top: 0, opacity: 1}, 'slow'); //Text animation    
    });
   
});
