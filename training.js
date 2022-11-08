jQuery(document).ready(function ($) {
    // Q1 Fundamentals Training
    if ($('#q1fundamentals')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/q1.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.training.length; i++) {
                var trainingDate = new Date(
                    data.training[i].Year,
                    data.training[i].Month - 1,
                    data.training[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.training[i].StartDay}-${data.training[i].EndDay}, 
                        ${data.training[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#q1fundamentals').append(html);
        })
    }
    // Q1 Practitioner Training
    if ($('#q1practitioner')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/q1.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.training.length; i++) {
                var trainingDate = new Date(
                    data.training[i].Year,
                    data.training[i].Month - 1,
                    data.training[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.training[i].StartDay}-${data.training[i].pEndDay}, 
                        ${data.training[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#q1practitioner').append(html);
        })
    }
    // Q2 Fundamentals Training
    if ($('#q2fundamentals')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/q2.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.training.length; i++) {
                var trainingDate = new Date(
                    data.training[i].Year,
                    data.training[i].Month - 1,
                    data.training[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.training[i].StartDay}-${data.training[i].EndDay}, 
                        ${data.training[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#q2fundamentals').append(html);
        })
    }
    // Q2 Practitioner Training
    if ($('#q2practitioner')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/q2.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.training.length; i++) {
                var trainingDate = new Date(
                    data.training[i].Year,
                    data.training[i].Month - 1,
                    data.training[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.training[i].StartDay}-${data.training[i].pEndDay}, 
                        ${data.training[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#q2practitioner').append(html);
        })
    }
    // Lead Auditor Training
    if ($('#leadauditor')) {
        $.getJSON('https://raw.githubusercontent.com/qsicst/training/main/leadaudit.json', function (data) {
            var now = new Date();
            var html = '<ul>';
            for (var i = 0; i < data.training.length; i++) {
                var trainingDate = new Date(
                    data.training[i].Year,
                    data.training[i].Month - 1,
                    data.training[i].StartDay
                );
                if (monthDiff(now, trainingDate) <= 6) {
                    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    html += `<li>
                        ${months[trainingDate.getMonth()]} 
                        ${data.training[i].StartDay}-${data.training[i].EndDay}, 
                        ${data.training[i].Year}
                        </li>
                    `;
                }
            }
            html += '</ul>';
            $('#leadauditor').append(html);
        })
    }


    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
});