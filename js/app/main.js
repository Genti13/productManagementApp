const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQVd-aAK07BTorXoPnxjF9QG-bKfbTRRQnytBMqZK2NgEWZFJoxrlXZL5-nGCoPZpRd88ZpOm9whPhT/pubhtml';

const tableHeaders = [];
const tableContent = {
    'cat-vaso': [],
    'cat-producto': [],
    'cat-bolsa': [],
    'cat-bandeja': []
};

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

        console.log(column);

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

