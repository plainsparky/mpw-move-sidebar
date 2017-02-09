
function jqMoveUpdateSize(){
    // Get the dimensions of the viewport
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    return width;
};
var is_moved = false;
jQuery(document).ready(function(){
    var width = jqMoveUpdateSize();
    if (width < 768){
        console.log('mobile');
        jQuery('.content-container').prepend(jQuery('.sidebar-container'));
    	is_moved = true;
    }
    jQuery(window).resize(function() {
        if (jqMoveUpdateSize() < 768 && !is_moved){
        		jQuery('.content-container').prepend(jQuery('.sidebar-container'));
    			is_moved = true;
        } else if (jqMoveUpdateSize() > 767 && is_moved){
        		jQuery('article .hentry').append(jQuery('.sidebar-container'));
    			is_moved = false;
        }
    });
});
