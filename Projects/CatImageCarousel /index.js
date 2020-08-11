/*$('.thumbnail').on('click', e => {
  console.log(e.target);
});*/

function thumbnailclicks(){
$('.thumbnail').on('click', function(click) {
  $(".hero img").attr('src' , $(click.currentTarget).find('img').attr('src'));
  $(".hero img").attr('alt' , $(click.currentTarget).find('img').attr('alt'));
})
}

$(thumbnailclicks)

//on click of picture

// function handleThumbnailClicks() {
//   $('.thumbnail').on('click', function(event) {
//      const imgSrc = $(event.currentTarget).find('img').attr('src');  
//      const imgAlt = $(event.currentTarget).find('img').attr('alt');
    
//     $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    
//     // Accomplishes the same as line 6 with only one use off .attr()
//     // by passing it an object with multiple properties.
//     // See: http://api.jquery.com/attr/#attr-attributes
//     // $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
//   });
// }

// $(handleThumbnailClicks);

//$= jquery element