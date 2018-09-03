$(document).ready(function() {
    $('#content').load('content.html #main');
 });

 function about() {
     $('#content').load('content.html #about');
 }

 function registrationManufacture() {
    $('#content').load('content.html #registrationManufacture');
    $(this).scrollTop(0);
}

function manufacture() {
    $('#content').load('content.html #manufacture');
    $(this).scrollTop(0);
}

function registrationSupplier() {
    $('#content').load('content.html #registrationSupplier');
    $(this).scrollTop(0);
}

function supplier() {
    $('#content').load('content.html #supplier');
    $(this).scrollTop(0);
}

function registrationDistributor() {
    $('#content').load('content.html #registrationDistributor');
    $(this).scrollTop(0);
}

function distributor() {
    $('#content').load('content.html #distributor');
    $(this).scrollTop(0);
}

function registrationCourier() {
    $('#content').load('content.html #registrationCourier');
    $(this).scrollTop(0);
}

function courier() {
    $('#content').load('content.html #courier');
    $(this).scrollTop(0);
}

function registrationRetailer() {
    $('#content').load('content.html #registrationRetailer');
    $(this).scrollTop(0);
}

function retailer() {
    $('#content').load('content.html #retailer');
    $(this).scrollTop(0);
}

/*function registrationPartner() {
    $('#content').load('content.html #registrationPartner');
    $(this).scrollTop(0);
}

function partner() {
    $('#content').load('content.html #partner');
    $(this).scrollTop(0);
}

function registrationMember() {
    $('#content').load('content.html #registrationMember');
    $(this).scrollTop(0);
}

function member() {
    $('#content').load('content.html #member');
    $(this).scrollTop(0);
}

function registrationCustomer() {
    $('#content').load('content.html #registrationCustomer');
    $(this).scrollTop(0);
}

function customer() {
    $('#content').load('content.html #customer');
    $(this).scrollTop(0);
}*/

function qs(search_for) {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i = 0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0 && search_for == parms[i].substring(0, pos)) {
            return parms[i].substring(pos + 1);;
        }
    }
    return "";
}