$(document).ready(function () {
    buildCart();
});

function buildCart() {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    for (var i = 0; i < cart.length; ++ i) {
        var tableRow = '<tr id="item_' + cart[i].product.id + '" class="text-center">' +
                            '<td class="product-remove"><a class="fake-link" onclick="deleteItem(' + cart[i].product.id + ')"><span class="ion-ios-close"></span></a></td>' +
                            '<td class="image-prod">' + 
                                '<div class="img" style="background-image:url(' + cart[i].product.image + ');"></div>' +
                            '</td>' +
                            '<td class="product-name">' +
                                '<h3>' + cart[i].product.name + '</h3>' +
                            '</td>' +
                            '<td class="price">$' + cart[i].product.price + '</td>' +
                            '<td class="quantity">' +
                                '<div class="input-group mb-3">' +
                                    '<input id="quantity_' + cart[i].product.id + '" type="text" onchange="onQuantityChanged(' + cart[i].product.id + ')" name="quantity" class="quantity form-control input-number" value="' + cart[i].count + '" min="1" max="100">' +
                                '</div>' +
                            '</td>' +
                            '<td id="total_' + cart[i].product.id + '" class="total">$' + cart[i].product.price * cart[i].count + '</td>' +
                        '</tr>';
                        
        $("#tblEntAttributes").append(tableRow); 
    }
}

function onQuantityChanged(id) {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    var index = findIndexById(id, cart);
    cart[index].count = parseInt($("#quantity_" + id).val());

    console.log(cart[index]);
    console.log($("#total_" + id));

    $("#total_" + id).html('$' + (cart[index].product.price * cart[index].count));

    localStorage.setItem('products', JSON.stringify(cart));

    updateCart();
}

function deleteItem(id) {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    $("#item_" + id).remove();

    var index = findIndexById(id, cart);
    cart.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(cart));

    updateCart();
}

function findIndexById(id, cart) {
    for (var i = 0; i < cart.length; ++ i) {
        if (id === cart[i].product.id) {
            return i;
        }
    }

    return 0;
}