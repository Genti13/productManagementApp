
function createElement(type, clss, id, txt) {
    return jQuery('<' + type + '/>', {
        class: clss,
        id: id,
        text: txt
    })
}

function addAtribbute(element, attrName, attrVal) {
    element.attr(attrName, attrVal);
}