$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').one('ajax:success', displayContent)
}

var displayContent = function(e, data, status, xhr) {
  $('.main-content').empty().append(xhr.responseText)
  bindListeners()
}



