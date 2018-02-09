$(document).ready(function(){
  $("#contactForm").validate({
        rules: {
            fullname: {required: true
            },
            phone: {required: true
            },
            email: {required: true,
                email: true
            },
            course: {required: true
            },
            comments: {required: true
            }

        },
        messages: {
            fullname: {required: "Please Enter Fullname"
            },
            phone: {required: "Please Enter Phone Number"
            },
            email: {required: "Please Enter Email ID",
                email: "Enter valid Email ID"
            },
            course: {required: "Please Enter Cousre name"
            },
            comments: {required: "Please Enter Message"
            }
        },
        submitHandler: function (form) {
            form.submit();
        },
        errorElement: 'div',
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        invalidHandler: function (form, validation) {
            $('div.form-error').remove();
        }
    });
});
