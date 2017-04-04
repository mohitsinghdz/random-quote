var cq = '',ca = '';


function findqoute() {
  $.ajax({
     url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    
   
    success: function(response) {
     
      cq = response.quoteText;
      ca = response.quoteAuthor;

    
      $('#text').text(cq);
      $('#name').text(ca);
     
       $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
    }
  });
}
$(document).ready(function() {
  findqoute();
  $('#new').click(findqoute);
 //$('#new').click(function(){findqoute();})

});