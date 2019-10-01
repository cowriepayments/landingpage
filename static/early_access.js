$(document).ready(function () {
  $("#early_access").submit(function(e) {
    e.preventDefault()
  
    if (!$('#email').val()) {
      $('#early_access_response').removeClass(['alert-success', 'alert-error'])
      $('#early_access_response').addClass('alert-warning')
      $('#early_access_response').html("Please provide a valid email address")
      $('#early_access_response').show()

      return
    }

    if (!$('#type').val()) {
      $('#early_access_response').removeClass(['alert-success', 'alert-error'])
      $('#early_access_response').addClass('alert-warning')
      $('#early_access_response').html("Please select a user type")
      $('#early_access_response').show()

      return
    }

    var $form = $(this)
  
    $.post($form.attr("action"), $form.serialize()).then(function(res) {
      //console.log(res)
      var parsedRes = $(res)
      var err = parsedRes.find('#early_access')
      console.log(err)
      if (err) {
        $('#early_access_response').removeClass(['alert-error', 'alert-success'])
        $('#early_access_response').addClass('alert-warning')
        $('#early_access_response').html("Are you sure you're not a robot?")
      } else {
        $('#early_access_response').removeClass(['alert-warning', 'alert-error'])
        $('#early_access_response').addClass('alert-success')
        $('#early_access_response').html("Thanks for signing up. We appreciate your interest.")
      }
      $('#early_access_response').show()
    }, function() {
      $('#early_access_response').removeClass(['alert-success', 'alert-warning'])
      $('#early_access_response').addClass('alert-error')
      $('#early_access_response').html("Oops, something went wrong")
      $('#early_access_response').show()
    })
  })
})