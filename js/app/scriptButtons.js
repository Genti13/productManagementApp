$('.productsTable').on('click', '.btn-add', function () {
    let siblings = $(this).parent().siblings();

    let cartElement = {
        product: siblings.html(),
        price: siblings.next().html()
    }

    createTableCartRow(cartElement);

})


$('.productsTable').on('click', '.btn-remove', function(){
    $(this).closest('tr').remove();
})