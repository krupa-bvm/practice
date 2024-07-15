var Login = function(){
    var loginPage = function(){
        var form = $('#login-form');
        var rules = {
            userid: {
                required: true,
                customValidation: true,
                maxlength: 255
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 255
            }
        };

        var messages = {
            userid: {
                required: "Please enter your username or email address.",
                maxlength: "The username or email cannot exceed 255 characters.",
                customValidation: "Please enter a valid email address or username (letters and numbers only)."
            },
            password: {
                required: "Please enter your password.",
                minlength: "The password must be at least 6 characters long.",
                maxlength: "The password cannot exceed 255 characters."
            }
        };

        // Add custom validation method for userid
        $.validator.addMethod("customValidation", function(value, element) {
            // Trim the value to remove any leading or trailing whitespace
            value = $.trim(value);

            // Check if it's an email
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true; // Valid email
            }

            // Check if it's a username (alphanumeric characters only)
            if (/^[a-zA-Z0-9]+$/.test(value)) {
                return true; // Valid username
            }

            // None of the above, return false
            return false;
        }, "Please enter a valid email address or username (letters and numbers only).");

        handleFormValidateWithMsg(form, rules, messages, function(form) {
            handleAjaxFormSubmit(form);
        });


    }

    return {
        init:function(){
            loginPage();
        }
    }
}();
