
@importScripts('/node_modules/jquery/dist/jquery.min.js;') // import jQuery;

 (document).ready(function($) {
    //fixed header
    window.onscroll - function() {
        if(window.pageYOffset >140){
            $('#header').addClass('active');
        }
        else{
            $('#header').removeClass('active');
        }
    }
});