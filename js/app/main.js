const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVd-aAK07BTorXoPnxjF9QG-bKfbTRRQnytBMqZK2NgEWZFJoxrlXZL5-nGCoPZpRd88ZpOm9whPhT/pubhtml';

const tableHeaders = [];
const tableContent = {
    'cat-vaso': [],
    'cat-producto': [],
    'cat-bolsa': [],
    'cat-bandeja': []
};

const categoryID = new Map([
    ['Bandeja', 1],
    ['Bolsa', 2],
    ['Producto', 3],
    ['Vaso', 4]
])

if(localStorage.facuApp){
    let theme = JSON.parse(localStorage.facuApp).theme;
    setTheme();
}

main();

async function main() {
    await fetchData();

    createTableHeader($('#principalTable'));
    createTableContentRow();

    createTableHeader($('#cartTable'));

}

async function fetchData() {
    const res = await fetch(url);
    const rep = await res.text();

    //TABLE
    let table = rep.substring(rep.indexOf('<table'), rep.indexOf('</table>') + 8);

    let elements = table.split('</tr>');
    elements.shift();
    elements.pop();

    let headers = elements[0];
    headers = headers.split('</td>');
    headers.pop();

    headers.forEach(element => {
        tableHeaders.push(element.substring(element.lastIndexOf('>') + 1));
    });

    elements.shift();
    elements.forEach(element_1 => {
        let column = element_1.split('</td>');
        column.pop();

        let product = column[0].substring(column[0].lastIndexOf('>') + 1);
        let value = column[1].substring(column[1].lastIndexOf('>') + 1);
        let category = column[2].substring(column[2].lastIndexOf('>') + 1);

        let entry = {
            'product': product,
            'value': value,
            'category': category
        };

        switch (category) {
            case 'Producto': tableContent["cat-producto"].push(entry); break;
            case 'Bolsa': tableContent["cat-bolsa"].push(entry); break;
            case 'Bandeja': tableContent["cat-bandeja"].push(entry); break;
            case 'Vaso': tableContent["cat-vaso"].push(entry); break;
        }

        //tableContent.push(entry);
    }
    );
}


function setTheme() {

    if (theme == 'dark') {
        setDarkTheme()
    }
    else{
        setLightTheme()
    }

}

$('.cross').on('click', function () {
    $('.popUp').toggle();
})

function setDarkTheme() {
    let tables = $('.table-striped');
    let darkBG = '#212529';
    let modal = $('.modal-dialog').find('.modal-content');

    theme = 'dark'

    $('body').css('background-color', darkBG);
    $('#menu-btns').css('background-color', darkBG);

    $('#filter-category').css('background-color', darkBG);
    $('#filter-category').css('color', 'white');

    $('#filter-input').css('background-color', darkBG);
    $('#filter-input').css('color', 'white');
    $('#filter-input').addClass('placeHolderDark');

    $('#filter-input-btn').css('color', 'white');
    $('#filter-input-btn').css('border', 'var(--bs-btn-border-width) solid white');
    $('#filter-input-btn').css('background', '#17191b');

    modal.addClass('dark-modal')

    $('#hamburger').css('fill', 'white');

    tables.each(function () {
        $(this).addClass('table-dark');
    })
}

function setLightTheme() {
    let tables = $('.table-striped');
    let modal = $('.modal-dialog').find('.modal-content');

    theme = 'light'

    $('body').css('background-color', 'white');
    $('#menu-btns').css('background-color', 'white');

    $('#filter-category').css('background-color', 'white');
    $('#filter-category').css('color', 'black');

    $('#filter-input').css('background-color', 'white');
    $('#filter-input').css('color', 'black');
    $('#filter-input').removeClass('placeHolderDark');

    $('#filter-input-btn').css('color', 'black');
    $('#filter-input-btn').css('border', 'var(--bs-btn-border-width) solid black');
    $('#filter-input-btn').css('background', 'white')

    modal.removeClass('dark-modal')

    $('#hamburger').css('fill', 'black');

    tables.each(function () {
        $(this).removeClass('table-dark');
    })
}