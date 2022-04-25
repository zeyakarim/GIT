$('#description-box input').on('click',function(e){
    e.preventDefault();
});

let description = $('#description-box').on('click',function(e){
    description.css({
        backgroundColor: 'lightgray',
        borderBottom: '1px solid black'
    });
});

let categories = $('#category-box').on('click',function(){
    categories.css({
        backgroundColor: 'lightgray'
    });
});



