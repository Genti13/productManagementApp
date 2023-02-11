function createTableHeader(table) {
    //Find Header element
    let header = createElement('tr').appendTo(table.find('.tableHeader'));

    //For each header create a table head
    tableHeaders.forEach(element => {

        if (element == 'Categoria') {
            return;
        }

        let item = createElement('th', null, null, element);
        addAtribbute(item, 'scope', 'col');
        item.appendTo(header);
    })

    if (table.attr('id') == "cartTable") {
        let item = createElement('th', 'cell-cant', null, 'Cant');
        addAtribbute(item, 'scope', 'col');
        item.appendTo(header);
    }

    //Create one more table head for the empty space
    createElement('th', null, null, '').appendTo(header);
}

function createTableContentRow() {

    let body = $('#principalTable').find('.tableBody');

    Object.keys(tableContent).forEach(element => {

        tableContent[element].forEach(element => {

            //Create new row
            let row = createElement('tr', 'mainTableElement');
            row.data('category', categoryID.get(element.category))

            //Set the product name to the new row
            let product = createElement('th', null, null, element.product);
            addAtribbute(product, 'scope', 'col');
            product.appendTo(row);

            //Set the product price to the new row
            let value = createElement('th', null, null, "$" + element.value);
            addAtribbute(value, 'scope', 'col');
            value.appendTo(row);

            //Set the button to the new row
            let button = createElement('th');
            addAtribbute(button, 'scope', 'col');

            let btn = createElement('button', 'btn btn-primary btn-add');
            addAtribbute(btn, 'type', 'button');
            btn.html('Agregar')

            btn.appendTo(button);
            button.appendTo(row);

            row.appendTo(body);
        })

    })

}

function createTableCartRow(content) {

    let body = $('#cartTable').find('.tableBody');

    let row = createElement('tr');

    let product = createElement('th', null, null, content.product);
    addAtribbute(product, 'scope', 'col');
    product.appendTo(row);

    let value = createElement('th', null, null, content.price);
    addAtribbute(value, 'scope', 'col');
    value.appendTo(row);

    let cant = createElement('th', 'cell-cant', null, content.cant);
    addAtribbute(cant, 'scope', 'col');
    cant.appendTo(row);

    let button = createElement('th');
    addAtribbute(button, 'scope', 'col');

    let btn = createElement('button', 'btn btn-primary btn-remove');
    addAtribbute(btn, 'type', 'button');
    btn.html('Quitar')

    btn.appendTo(button);
    button.appendTo(row);

    row.appendTo(body)

}