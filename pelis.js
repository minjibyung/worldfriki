$(document).ready(function(){

    $('.Aside .category_item[#="todo"]').addClass('ct_item-active');

    $('.category_item').click(function(){
       var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

    //OCULTAR PRODUCTOS============================
$('.productos').hide();

//MOSTRAR PRODUCTOS=================================
$('.productos[category="'+catProduct+'"]').show();

});

$('.category_item[category="todo"]').click(function(){
    $('.productos').show();
});
});