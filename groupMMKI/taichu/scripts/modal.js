/* jQueryで実装 */
$(function(){
    /*open button */
    $('.modalLink').on('click',function(){
        $(this).next('.modalWindow').addClass('openWindow');
        $('main').append('<div class="modalBackground"></div>');/* */
    });

    /* close button */
    $('.closeModal').on('click',function(){
        $(this).parents('.modalWindow').removeClass('openWindow');
        $('.modalBackground').remove();
    });
    /* modalwindowの外側をクリックしたか判定する */
    $(document).on('click',function(event){
        if($(event.target).closest('.modalBackground').length){
            $('.modalWindow').removeClass('openWindow');
            $('.modalBackground').remove();
        }
    });
});/* fin */