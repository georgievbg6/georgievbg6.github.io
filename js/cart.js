$(document).ready(function () {
    buildCart();
});

function buildCart() {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    for (var i = 0; i < cart.length; ++ i) {
        var tableRow = '<tr id="item_' + i + '" class="text-center">' +
                            '<td class="product-remove"><a class="fake-link" onclick="deleteItem(' + i + ')"><span class="ion-ios-close"></span></a></td>' +
                            '<td class="image-prod">' + 
                                '<div class="img" style="background-image:url(' + cart[i].product.image + ');"></div>' +
                            '</td>' +
                            '<td class="product-name">' +
                                '<h3>' + cart[i].product.name + '</h3>' +
                            '</td>' +
                            '<td class="price">$' + cart[i].product.price + '</td>' +
                            '<td class="quantity">' +
                                '<div class="input-group mb-3">' +
                                    '<input id="quantity_' + i + '" type="text" onchange="onQuantityChanged(' + i + ')" name="quantity" class="quantity form-control input-number" value="' + cart[i].count + '" min="1" max="100">' +
                                '</div>' +
                            '</td>' +
                            '<td id="total_' + i + '" class="total">$' + cart[i].product.price * cart[i].count + '</td>' +
                        '</tr>';
                        
        $("#tblEntAttributes").append(tableRow); 
    }
}

function onQuantityChanged(index) {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    cart[index].count = parseInt($("#quantity_" + index).val());

    $("#total_" + index).html('$' + (cart[index].product.price * cart[index].count));

    localStorage.setItem('products', JSON.stringify(cart));

    updateCart();
}

function deleteItem(index) {
    let cart = [];

    if (localStorage.getItem('products')){
        cart = JSON.parse(localStorage.getItem('products'));
    }

    $("#item_" + index).remove();

    cart.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(cart));

    updateCart();
}