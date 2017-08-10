var current_player;
function check_for_victory(){
  
  if (($('.1').html() == $('.2').html() &&  $('.2').html() == $('.3').html()) && $('.1').hasClass('touched') && $('.2').hasClass('touched') && $('.3').hasClass('touched'))
    return $('.1').html();
  else if (($('.4').html() == $('.5').html() &&  $('.5').html() == $('.6').html()) && $('.4').hasClass('touched') && $('.5').hasClass('touched') && $('.6').hasClass('touched'))
    return $('.4').html();
  else if (($('.7').html() == $('.8').html() &&  $('.8').html() == $('.9').html()) && $('.7').hasClass('touched') && $('.8').hasClass('touched') && $('.9').hasClass('touched'))
    return $('.7').html();
      //Veritical
  else if (($('.1').html() == $('.4').html() &&  $('.4').html() == $('.7').html()) && $('.1').hasClass('touched') && $('.4').hasClass('touched') && $('.7').hasClass('touched'))
    return $('.1').html();
  else if (($('.2').html() == $('.5').html() &&  $('.5').html() == $('.8').html()) && $('.2').hasClass('touched') && $('.5').hasClass('touched') && $('.8').hasClass('touched'))
    return $('.2').html();
  else if (($('.3').html() == $('.6').html() &&  $('.6').html() == $('.9').html()) && $('.3').hasClass('touched') && $('.6').hasClass('touched') && $('.9').hasClass('touched'))
    return $('.3').html();
      //Diagonal
  else if (($('.1').html() == $('.5').html() &&  $('.5').html() == $('.9').html()) && $('.1').hasClass('touched') && $('.5').hasClass('touched') && $('.9').hasClass('touched'))
    return $('.1').html();
  else if (($('.3').html() == $('.5').html() &&  $('.5').html() == $('.7').html()) && $('.3').hasClass('touched') && $('.5').hasClass('touched') && $('.7').hasClass('touched'))
    return $('.3').html();
  else
    return "lmao";
  
}


function generate_new_board(){
    var current_player = 1;
    $('.jumbotron').html("");
    $('.jumbotron').append("<div class='board'></div>");
    for(var i = 1; i < 10; i++){
        $('.board').append("<div class='spot "+i+"'></div>");
    }
}
function switch_player(){
  current_player == 1 ? current_player = 0 : current_player = 1;
}
function display_victor(){
  if(check_for_victory() != "lmao"){
    var winner;
    check_for_victory() == "x" ? winner = "1" : winner = "2";
    $('.jumbotron').html("");
    $('.jumbotron').append("<div class='win_screen'></div>");
    $('.win_screen').append("<p>Player "+winner+" won the game!</p>");
    $('.win_screen').append("<a class='btn btn-success'>Play Again?</a>");
  }
}

$(document).ready(function(){
  
  $('.jumbotron').on("click", ".board div", function(){
      if(current_player == 1){
        $(this).html("x");        
      }else{
        $(this).html("o");
      }      
      $(this).addClass("touched");
      display_victor();
      switch_player();
  });
  $('.jumbotron').on("click", ".win_screen a", function(){
     generate_new_board();
  });    
  
});

generate_new_board();