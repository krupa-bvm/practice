var Product = (function() {
    function initAddUpdateenProduct() {
        var form = $('#product-form');
        var rules = {
            name: {
                required: true,
            },
            detail: {
                required: true,
                maxlength: 255
            },
            images: {
                required: true,
                maxlength: 255
            },
        };

        var messages = {
            name: {
                required: "Please enter a name.",
            },
            detail: {
                required: "Please enter a detail.",
                maxlength: "Detail cannot be more than 255 characters."
            },
            images: {
                required: "Please select image, Each image must be a file of type: jpeg, png, jpg, gif.",
            },
        };

        if (typeof form.validate === "function") {
            form.validate({
                rules: rules,
                messages: messages,
                submitHandler: function(form) {
                    form.submit();
                }
            });
        } else {
            console.error("jQuery Validation Plugin is not loaded");
        }
    }

    return {
        addUpdate: initAddUpdateenProduct
    };
})();


// function customerInfoValid() {
//     var customValid = true;
//     $('.clinics').each(function () {
//         var elem = $(this);
//         if ($(this).val().length === 0) {
//             $("#clinics-error").text('Please select at least one clinic.');
//             customValid = false;
//         } else {
//             $("#clinics-error").text('');
//         }
//     });
//     $('.doctors').each(function () {
//         var elem = $(this);
//         if ($(this).val().length === 0) {
//             $("#doctors-error").text('Please select at least one doctor.');
//             customValid = false;
//         } else {
//             $("#doctors-error").text('');
//         }
//     });
//     $('.patient').each(function () {
//         var elem = $(this);
//         if ($(this).val().length === 0) {
//             $("#patient-error").text('Please select at least one patient.');
//             customValid = false;
//         } else {
//             $("#patient-error").text('');
//         }
//     });
//     return customValid;
// }