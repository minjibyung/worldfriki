$(document).ready(function() {

    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    $('.category_item').click(function(){
         var catProduct = $(this).attr('category');
         console.log(catProduct);

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        $('.Aside1').hide();

        $('.Aside1[category="'+catProduct+'"]').show();
    });
    $('.category_item[category="all"]').click(function(){
        $('.Aside1').show();

    });
});