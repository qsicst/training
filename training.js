jQuery(document).ready(function ($) {
    if ($('#q1fundamentals')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/q1fund.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.Q1Fundamentals.length; i++) {
                var trainingDate = new Date(
                    data.Q1Fundamentals[i].Year,
                    data.Q1Fundamentals[i].Month - 1,
                    data.Q1Fundamentals[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.Q1Fundamentals[i].StartDay}-${data.Q1Fundamentals[i].StartDay}, 
                        ${data.Q1Fundamentals[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#q1fundamentals').append(html);
        })
    }

    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    function test(d1, d2) {
        return monthDiff(d1, d2);
    }
});

