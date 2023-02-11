function generatePDF(pdfTitle, itemList) {
    const doc = new jsPDF();

    doc.setFontSize(34);
    doc.text(pdfTitle, 10, 10);

    doc.setFontSize(18);
    doc.text("Producto", 45, 20);
    doc.text("Valor", 122, 20);
    doc.text("Cantidad", 150, 20);


    doc.setFontSize(14);

    let rowCounter = 30;
    itemList.forEach(element => {
        doc.text(element.product, 10, rowCounter);
        doc.text(element.price, 120, rowCounter);
        doc.text(element.cant.toString(), 160, rowCounter);
        rowCounter += 10;
    });

    rowCounter += 5;
    doc.setFontSize(20);
    doc.text('TOTAL:' + '\t' + calculateTotal(), 80, rowCounter);

    doc.save(pdfTitle + ".pdf");
}

$('#downloadPDF').on('click', function () {
    generatePDF($(this).closest('.modal-content').find('input').val(), localStorageMap);
})