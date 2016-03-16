
function jqMoveUpdateSize(){
    // Get the dimensions of the viewport
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    return width;
};
var is_moved = false;
jQuery(document).ready(function(){
    var width = jqMoveUpdateSize();
    if (width < 761){
        console.log('mobile');
        if (jQuery('article.accordion').length) {
            jQuery('article.accordion').prepend(jQuery('.contact-widget'));
    	    is_moved = true;
        }
    }
    jQuery(window).resize(function() {
        if (jqMoveUpdateSize() < 761 && !is_moved){
            if (jQuery('article.accordion').length) {
        		jQuery('article.accordion').prepend(jQuery('.contact-widget'));
    			is_moved = true;
            }
        } else if (jqMoveUpdateSize() > 760 && is_moved){
        		jQuery('.sidebar').append(jQuery('.contact-widget'));
    			is_moved = false;
        }
    });
});
