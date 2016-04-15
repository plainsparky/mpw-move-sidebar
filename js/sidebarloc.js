
function jqMoveUpdateSize(){
    // Get the dimensions of the viewport
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    return width;
};
var is_moved = false;
jQuery(document).ready(function(){
    var width = jqMoveUpdateSize();
    if (width < 801){
        console.log('mobile');
        jQuery('.post-content').prepend(jQuery('#conv-buttons'));
    	is_moved = true;
    }
    jQuery(window).resize(function() {
        if (jqMoveUpdateSize() < 801 && !is_moved){
        		jQuery('.post-content').prepend(jQuery('#conv-buttons'));
    			is_moved = true;
        } else if (jqMoveUpdateSize() > 800 && is_moved){
        		jQuery('#conv-buttons-container').prepend(jQuery('#conv-buttons'));
    			is_moved = false;
        }
    });
});
