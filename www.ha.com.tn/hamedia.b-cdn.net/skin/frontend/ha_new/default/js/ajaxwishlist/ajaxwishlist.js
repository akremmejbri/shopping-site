function ajaxCompare(a, b) {
    a = a.replace("catalog/product_compare/add", "ajaxwishlist/index/compare"), a += 'isAjax/1/', jQuery('#ajax_loading' + b).show(), jQuery.ajax({
        url: a,
        dataType: 'json',
        success: function(a) {
            jQuery('#ajax_loading' + b).hide(), a.status == 'ERROR' ? alert(a.message) : (alert(a.message), console.log({
                debugObj: a
            }), jQuery('.block-compare').length ? jQuery('.block-compare').replaceWith(a.sidebar) : jQuery('.col-right').length && jQuery('.col-right').prepend(a.sidebar))
        }
    })
}

function ajaxWishlist(a, b) {
    a = a.replace("wishlist/index", "ajaxwishlist/index"), a += 'isAjax/1/', jQuery('#ajax_loader' + b).show(), jQuery.ajax({
        url: a,
        dataType: 'json',
        success: function(a) {
            jQuery('#ajax_loader' + b).hide(), a.status == 'ERROR' || (jQuery('.block-wishlist').length ? jQuery('.block-wishlist').replaceWith(a.sidebar) : jQuery('.col-right').length && jQuery('.col-right').prepend(a.sidebar))
        }
    })
}