$(document).ready(bindListeners)

function bindListeners () {
  $('.content-links').one('ajax:success', displayContent)
  $('.email-link').one('ajax:success', overlayContent)
}

var displayContent = function(e, data, status, xhr) {
  $('.main-content').empty().append(xhr.responseText)
  bindListeners()
}

var overlayContent = function(e, data, status, xhr) {
  $('.main-content').prepend(xhr.responseText)
  $('.email').one('ajax:error ajax:success', emailSend)
}

var emailSend = function(e) {
  if (e.type === 'ajax:success') {
    emailSent()
  } else {
    emailError()
  }
}

var emailSent = function() {
  $('.email-form').remove()
}

var emailError = function() {
  $('.email-form').remove()
}


