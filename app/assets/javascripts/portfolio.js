$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').on('click', getContent)
}

var getContent = function(e) {
  e.preventDefault()
  var ajaxCall = $.ajax({
    url: e.target.href,
    type: 'GET'
  })
  ajaxCall.done(displayContent)
}

var displayContent = function(e) {
  $('.main-content').empty().append(e)
}