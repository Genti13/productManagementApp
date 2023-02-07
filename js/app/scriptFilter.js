$('#filter-category').on('change', function () {

    let filterId = $(this).val();
    let elements = $('.mainTableElement');

    elements.each(function () {
        if ($(this).data('category') != filterId) {
            $(this).css('display', 'none');
        } else {
            $(this).css('display', 'table-row');
        }
    })
})

$('#filter-input-btn').on('click', function () {
    let filter = $('#filter-input').val()
    let elements = $('.mainTableElement');

    elements.each(function () {
        if (!$(this).first().text().includes(filter)) {
            $(this).css('display', 'none');
        } else {
            $(this).css('display', 'table-row');
        }
    })
})

$('#filter-input').keypress(function (event) {
    let keycode = event.keycode ? event.keycode : event.which;

    if (keycode == '13') {
        let elements = $('.mainTableElement');
        let filter = $('#filter-input').val();

        elements.each(function () {
            if (!$(this).first().text().includes(filter)) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'table-row');
            }
        })
    }
});