$('.productsTable').on('click', '.btn-add', function () {
    let siblings = $(this).parent().siblings();

    let cartElement = {
        product: siblings.html(),
        price: siblings.next().html(),
        cant: 1
    }

    if (localStorageMap.get(cartElement.product)) {
        cartElement.cant = localStorageMap.get(cartElement.product).cant + 1;
    }

    $('#cartTable .tableBody tr').each(function () {

        $(this).remove();

    })

    localStorageMap.set(cartElement.product, cartElement)

    localStorageMap.forEach(element => {
        createTableCartRow(element);
    })

    let tr = createElement('tr', null, null, null);
    tr.appendTo($('#cartTable').find('.tableBody'));

    let th = createElement('th', null, null, 'TOTAL');
    addAtribbute(th, 'colspan', 2);
    th.appendTo(tr);

    th = createElement('th');
    addAtribbute(th, 'colspan', 2);
    th.appendTo(tr);

    tr = createElement('tr', 'summaryRow', null, null);
    tr.appendTo($('#cartTable').find('.tableBody'));

    th = createElement('th', null, 'total', calculateTotal());
    addAtribbute(th, 'colspan', 2);
    th.appendTo(tr);

    th = createElement('th');
    addAtribbute(th, 'colspan', 2);
    th.appendTo(tr);

    let button = createElement('button', 'btn btn-primary', 'downloadAsPDF', 'Exportar a PDF');
    addAtribbute(button, 'data-bs-toggle', 'modal');
    addAtribbute(button, 'data-bs-target', '#exportAsPDF');
    button.appendTo(th);

})

function calculateTotal() {
    let total = 0;

    localStorageMap.forEach(element => {
        total += parseInt(element.price.slice(1) * element.cant);
    })

    return '$' + total;
}

$('.productsTable').on('click', '.btn-remove', function () {
    $(this).closest('tr').remove();

    localStorageMap.delete($(this).closest('tr').find('th:first').text());
})

$('#hamburger').on('click', function () {
    $('#menu').toggle();
})

$('#btn-list').on('click', function () {
    $('#addProducts').css('display', 'block');
    $('#cart').css('display', 'none');
    $('#menu').toggle();
})

$('#btn-cart').on('click', function () {
    $('#cart').css('display', 'block');
    $('#addProducts').css('display', 'none');
    $('#menu').toggle();
})

$('.cross').on('click',function(){
    $('.popUp').toggle();
})