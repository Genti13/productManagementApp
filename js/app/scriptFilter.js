$('#filter-category').on('change', function () {

    let filterId = $(this).val();
    let elements = $('.mainTableElement');

    console.log(filterId);

    elements.each(function () {
        if (filterId == 0) {
            $(this).css('display', 'table-row');
            return;
        }

        if ($(this).data('category') != filterId) {
            $(this).css('display', 'none');
        } else {
            $(this).css('display', 'table-row');
        }
    })
})

$('#filter-input-btn').on('click', function () {
    let filter = $('#filter-input').val().toLowerCase();
    let elements = $('.mainTableElement');

    filterElements(elements, filter);


})

$('#filter-input').keypress(function (event) {
    let keycode = event.keycode ? event.keycode : event.which;

    if (keycode == '13') {
        let elements = $('.mainTableElement');
        let filter = $('#filter-input').val().toLowerCase();

        filterElements(elements, filter);
    }
});

function filterElements(elements, filter) {
    elements.each(function () {
        if (!$(this).first().text().toLowerCase().includes(filter)) {
            $(this).css('display', 'none');
        } else {
            $(this).css('display', 'table-row');
        }
    })
}