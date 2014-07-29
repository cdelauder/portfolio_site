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
  $('.page').append('<div class="shadow"></div>')
  $('.main-content').prepend(xhr.responseText)
  $('.email-textfield').one('ajax:error ajax:send ajax:success', emailSend)
  $('.close').one('ajax:error ajax:success', cancel)


}

var emailSend = function(e) {
  if (e.type === 'ajax:success') {
    emailSent()
  } else if (e.type === 'ajax:send') {
    $('.email-textfield').append('Sending...')
  } else {
    emailError()
  }
}

var emailSent = function() {
  toggleEmailForm()
  $('.email-status').text('Email sent')
}

var emailError = function() {
  toggleEmailForm()
  $('.email-status').text('Error, please try again')
}

var cancel = function() {
  toggleEmailForm()
}

var toggleEmailForm = function() {
  $('.shadow').remove()
  $('.email-form').remove()
  $('.email').one('ajax:error ajax:success', emailSend)
  $('.email-link').one('ajax:success', overlayContent)
}


