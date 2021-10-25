(async function(){
    // let req = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCTC6NnEks9PsKItf31avt5Zb9aL1sF_58&id=hKB-YGF14SY`);
    // let data = await req.json();
    // console.log(data)
    const YOUTUBE_API_KEY = "AIzaSyCTC6NnEks9PsKItf31avt5Zb9aL1sF_58";
    //url from YouTube docs modified for my random term and API key,
    
    let theHref = window.location.href;
    if(theHref.includes('?')){
        let theId = theHref.split('?')[1].split('=')[1];
        console.log(theId)
        const url = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=100&id=${theId}&key=${YOUTUBE_API_KEY}`); 
        let data = await url.json();
        console.log(data);
        $('.theIframeMan').attr('src', 'https://www.youtube.com/embed/'+theId);
        $('.title-top-text, .file-name-of-video').text(data.items[0].snippet.title)
    }
})();