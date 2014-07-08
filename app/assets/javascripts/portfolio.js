$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').off().on('click', getContent)
}

var getContent = function(e) {
  console.log('get')
  e.preventDefault()
  var ajaxCall = $.ajax({
    url: e.target.href,
    type: 'GET'
  })
  ajaxCall.done(displayContent)
}

var displayContent = function(e) {
  console.log('display')
  $('.main-content').empty().append(e)
}


