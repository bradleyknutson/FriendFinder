// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='questionForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: {
            required: true,
            minlength: 3
        },
        photo: {
            required: true,
            url: true
        },
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        q1: 'required',
        q2: 'required',
        q3: 'required',
        q4: 'required',
        q5: 'required',
        q6: 'required',
        q7: 'required',
        q8: 'required',
        q9: 'required',
        q10: 'required'
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });