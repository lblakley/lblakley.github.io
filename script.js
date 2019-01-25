$(document).ready(function () {
  $('.tabs').tabs();
  $('.parallax').parallax();
  $('#textarea1').val('');
  $("#modal1").modal()
  $("form").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      crossDomain: true,
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
        
          $("#modal1").modal('open');
          $("form")[0].reset()
         // window.location.href = 'https://lblakley.github.io'; // change this. 
       
        } else {
          alert("An error occured: " + response.message);
        }
      }
    });
  });

});