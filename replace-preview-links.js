jQuery( document ).ready(function() {

var previewButtons = jQuery('.theme-previewer-overlay').children('button.view-demo-button');

console.log(previewButtons);

//console.log( previewButtons.eq(0).data() );

console.log( previewButtons.eq(0).attr("data-blog-url") );

previewButtons.eq(0).attr("data-blog-url","http://remapdemo.webbudesign.com/?marker=2");
previewButtons.eq(1).attr("data-blog-url","http://templatic.com/demos/5star/");
previewButtons.eq(2).attr("data-blog-url","http://preview.ait-themes.com/directory/wp1/");
previewButtons.eq(3).attr("data-blog-url","http://demo1.artillegence.com/limitless/");
previewButtons.eq(4).attr("data-blog-url","http://preview.ait-themes.com/touroperator/wp1/");
previewButtons.eq(5).attr("data-blog-url","http://grupobms.culturalivre.com/");

//console.log( previewButtons.eq(0).data() );
 
});
