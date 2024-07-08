$('#openBtn').click(function(){
    console.log('hi')
    $('.demo').animate({width: '15%'} , 500)
    $('#sideBar a').removeClass('d-none')
    $('#openBtn').animate({left:'15%'})
    // $('#words').animate({left:'15%'})
})


$('#closeBtn').click(function () {
    $('.demo').animate({width: '0%'} , 500)
    $('#sideBar p').addClass('d-none')
    $('#openBtn').animate({left:'0%'})
    $('#sideBar a').addClass('d-none')

  })

$('.accordion-header').click(function (event) {
    if ($(this).siblings('.accordion-body').hasClass('d-flex')) {
        $(this).siblings('.accordion-body').removeClass('d-flex');
        $(this).siblings('.accordion-body').addClass('d-none');
    }else{
        $(this).siblings('.accordion-body').addClass('d-flex');
        $('.accordion-header').siblings('.accordion-body').addClass('d-none');
        $(this).siblings('.accordion-body').removeClass('d-none');
    }
  })

  $('#duration').countdown('2025/08/07', function(event) {
    // $(this).html(event.countdown('days %H:%M:%S'));
    $(this).html(event.strftime(`<div class="layer2"><div class="container text-center text-white"><div class="row m-5 gx-4"><div class="box col-md-3 my-5"><div class="border border-1 my-5"><p class="my-5 fs-2 "><span>%d</span>D</p></div></div>
 <div class="box col-md-3 my-5"><div class="border border-1 my-5"><p class="my-5  fs-2 "><span>%H</span>h</p></div></div>
  <div class="box col-md-3 my-5"><div class="border border-1 my-5"><p class="my-5  fs-2 "><span>%M</span>m</p></div></div>
    <div class="box col-md-3 my-5"><div class="border border-1 my-5"><p class="my-5 fs-2"><span>%S</span>s</p></div></div>
       </div></div></div>`
    ));
  });



  var max_length = 100; 
  $('textarea').keyup(function () { 
      var len = max_length - $(this).val().length; 
      $('.GFG').text(len); 
      if (len <= 0) {
        $('.GFG').text('your available character finished '); 
      }
  }); 