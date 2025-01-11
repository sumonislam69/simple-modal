let modal = document.getElementById('myModal');
let button = document.getElementById('btn');
let span = document.getElementsByClassName('close');



$('#btn').click(function(){
     $('#myModal').fadeIn();
});


$('.close').click(function(){
     $('#myModal').fadeOut();
});

$(window).click(function(event){
     if($(event.target).is('#myModal')){
          $('#myModal').fadeOut();
     };
});
