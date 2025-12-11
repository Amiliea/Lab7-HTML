$(document).ready(function() {
    console.log('jQuery готов к работе!');

    $('.tab-btn').click(function() {
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');

        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });

    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 80
            }, 800);
        }
    });

    $('#loadQuote').click(function() {
        $.get('https://api.quotable.io/random')
            .done(function(data) {
                $('#quote p').text(data.content);
                $('#quote cite').text(data.author);
            })
            .fail(function() {
                $('#quote p').text('Ошибка загрузки цитаты :(');
            });
    });

    $('#draggable').draggable();

    $('#datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true
    });
});

