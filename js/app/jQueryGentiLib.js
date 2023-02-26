/*Crea un elemento para el DOM al que se le puede asignar clase, id y texto html interno*/
function createElement(type, clss, id, txt) {
    return jQuery('<' + type + '/>', {
        class: clss,
        id: id,
        text: txt
    })
}

/*Agrega Atributos a un elemento del DOM*/
function addAtribbute(element, attrName, attrVal) {
    element.attr(attrName, attrVal);
}

/*Agrega un atributo de data a un elemento del DOM*/
function addDataAttribute(element, name, dataVal) {
    element.attr('data-' + name, dataVal);
}

function mapToStr(map) {
    return JSON.stringify(Object.fromEntries(map));
}

function mapToJS(map) {
    return JSON.parse(JSON.stringify(Object.fromEntries(map)));
}