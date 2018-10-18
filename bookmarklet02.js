( function() {

    console.log("rad");

    let images = document.getElementsByTagName( 'img' );
    for ( let i = 0; i < images.length; i++ ) {

        images[i].src = 'https://media.giphy.com/media/jKYoHrgFg8G0U/giphy.gif';

    }

    document.body.style.backgroundImage = "url('https://media.giphy.com/media/uVLwJ093UeZgY/giphy.gif')";
    document.body.style.backgroundRepeat = "repeat";

} ) ();

// (function() {
//     let s = document.createElement('script');
//     s.src="bookmarklet02.js?" + new Date().getTime();
//     document.appendChild(s);
// })();
