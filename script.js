$('.first #removeCard').click(function(){
  toggleReveal($('.first .action'), $('.first .confirm'));
});

$('.first #cancelDelete').click(function(){
  toggleReveal($('.first .confirm'), $('.first .action'));
});

function toggleReveal($hideElement, $showElement){
  $hideElement.removeClass('reveal');
  
  setTimeout(function(){
    $hideElement.hide();
    $showElement.show().addClass('reveal');
  }, 200);
}
$(document).ready(function(){
        $('button').click(function(){
          $('button').parent().addClass('active');
          setTimeout(function(){
            $('button').addClass('success');
          }, 3400);
          setTimeout(function(){
            alert("No Payment Detected Please Make Payment And Try Again...!");
            $('button').parent().removeClass('active');
            $('button').removeClass('success');
          }, 4200);
        });
      });
