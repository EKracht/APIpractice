'use strict';

var url = "http://localhost:8000/";

$(document).ready(init);

function init() {
  $('#getImage').on('click', getImage);
}

function getImage(){ 
  $.ajax(url + 'gravatar/' + $('#inputEmail').val() , {})
    .done(function(data){
      console.log(data);
    })
    .fail(function(error){
      console.log(error);
    })
}

