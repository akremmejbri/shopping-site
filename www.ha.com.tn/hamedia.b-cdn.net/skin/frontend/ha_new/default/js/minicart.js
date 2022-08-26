function Minicart(a) {
    this.formKey = a.formKey, this.previousVal = null, this.defaultErrorMessage = 'Error occurred. Try to refresh page.', this.selectors = {
        itemRemove: '#cart-sidebar .remove',
        container: '#header-cart',
        inputQty: '.cart-item-quantity',
        qty: 'a.panier span.count',
        overlay: '.minicart-wrapper',
        error: '#minicart-error-message',
        success: '#minicart-success-message',
        quantityButtonPrefix: '#qbutton-',
        quantityInputPrefix: '#qinput-',
        quantityButtonClass: '.quantity-button'
    }, a.selectors && $j.extend(this.selectors, a.selectors)
}
Minicart.prototype = {
    init: function() {
        var a = this;
        $j(this.selectors.itemRemove).unbind('click.minicart').bind('click.minicart', function(b) {
            b.preventDefault(), a.removeItem($j(this))
        }), $j(this.selectors.inputQty).unbind('blur.minicart').unbind('focus.minicart').bind('focus.minicart', function() {
            a.previousVal = $j(this).val(), a.displayQuantityButton($j(this))
        }).bind('blur.minicart', function() {
            a.revertInvalidValue(this)
        }), $j(this.selectors.quantityButtonClass).unbind('click.quantity').bind('click.quantity', function() {
            a.processUpdateQuantity(this)
        })
    },
    removeItem: function(b) {
        var a = this;
        confirm(b.data('confirm')) && (a.hideMessage(), a.showOverlay(), $.ajax({
            type: 'POST',
            dataType: 'json',
            data: {
                form_key: a.formKey
            },
            url: b.attr('href')
        }).done(function(c) {
            a.hideOverlay(), c.success ? (a.updateCartQty(c.qty), a.updateContentOnRemove(c, b.closest('li'))) : a.showMessage(c)
        }).error(function() {
            a.hideOverlay(), a.showError(a.defaultErrorMessage)
        }))
    },
    revertInvalidValue: function(a) {
        (!this.isValidQty($j(a).val()) || $j(a).val() == this.previousVal) && ($j(a).val(this.previousVal), this.hideQuantityButton(a))
    },
    displayQuantityButton: function(a) {
        var b = this.selectors.quantityButtonPrefix + $j(a).data('item-id');
        $j(b).addClass('visible').attr('disabled', null)
    },
    hideQuantityButton: function(a) {
        var b = this.selectors.quantityButtonPrefix + $j(a).data('item-id');
        $j(b).removeClass('visible').attr('disabled', 'disabled')
    },
    processUpdateQuantity: function(b) {
        var a = $j(this.selectors.quantityInputPrefix + $j(b).data('item-id'));
        this.isValidQty(a.val()) && a.val() != this.previousVal ? this.updateItem(b) : this.revertInvalidValue(a)
    },
    updateItem: function(d) {
        var a = this,
            b = $j(this.selectors.quantityInputPrefix + $j(d).data('item-id')),
            c = parseInt(b.val(), 10);
        return a.hideMessage(), a.showOverlay(), $.ajax({
            type: 'POST',
            dataType: 'json',
            url: b.data('link'),
            data: {
                qty: c,
                form_key: a.formKey
            }
        }).done(function(d) {
            a.hideOverlay(), d.success ? (a.updateCartQty(d.qty), c !== 0 ? a.updateContentOnUpdate(d) : a.updateContentOnRemove(d, b.closest('li'))) : a.showMessage(d)
        }).error(function() {
            a.hideOverlay(), a.showError(a.defaultErrorMessage)
        }), !1
    },
    updateContentOnRemove: function(a, c) {
        var b = this;
        c.hide('slow', function() {
            $j(b.selectors.container).html(a.content), b.showMessage(a)
        })
    },
    updateContentOnUpdate: function(a) {
        $j(this.selectors.container).html(a.content), this.showMessage(a)
    },
    updateCartQty: function(a) {
        typeof a != 'undefined' && $j(this.selectors.qty).text(a)
    },
    isValidQty: function(a) {
        return a.length > 0 && a - 0 == a && a - 0 > 0
    },
    showOverlay: function() {
        $j(this.selectors.overlay).addClass('loading')
    },
    hideOverlay: function() {
        $j(this.selectors.overlay).removeClass('loading')
    },
    showMessage: function(a) {
        typeof a.notice != 'undefined' ? this.showError(a.notice) : typeof a.error != 'undefined' ? this.showError(a.error) : typeof a.message != 'undefined' && this.showSuccess(a.message)
    },
    hideMessage: function() {
        $j(this.selectors.error).fadeOut('slow'), $j(this.selectors.success).fadeOut('slow')
    },
    showError: function(a) {
        $j(this.selectors.error).text(a).fadeIn('slow')
    },
    showSuccess: function(a) {
        $j(this.selectors.success).text(a).fadeIn('slow')
    }
}