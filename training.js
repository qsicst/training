jQuery(document).ready(function ($) {
    if ($('#q1fundamentals')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/training.json', function (data) {
            var year = new Date().getFullYear();
            var month = new Date().getMonth() + 1;
            var day = new Date().getDate();

            $('#q1fundamentals').append('Hello!');
        })
    }
});

