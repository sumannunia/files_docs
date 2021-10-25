const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
//a function to get a random search term
const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
//variable for your API_KEY
const YOUTUBE_API_KEY = "AIzaSyCTC6NnEks9PsKItf31avt5Zb9aL1sF_58";
//url from YouTube docs modified for my random term and API key,
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${thequery}&key=${YOUTUBE_API_KEY}`; 
// const url = `https://www.googleapis.com/youtube/v3/videos?id=hKB-YGF14SY&maxResults=1&q=javascript&key=${YOUTUBE_API_KEY}`; 
//fetch function following the aforementioned process
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.items[0].id.videoId);
    //console.log above is to help access proper data in the JSON
    //object
    //set iframe source to proper URL (notice same dynamic strings 
    //used above)
    console.log(data)
    let theContainer = document.querySelector('.the-data-row');
    theContainer.innerHTML = '';
    data.items.map(detail => {
        
        // console.log(detail.id.videoId);
        theRowMan(detail.snippet.thumbnails.medium.url, detail.snippet.title, detail.id.videoId, theContainer);
    });
    // document.querySelector(".iframeClass").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
function theRowMan(url, title, videoId, container){
    let theRow = document.createElement('div');
        theRow.className = 'col-md-4 col-lg-3 column-for-data-row';
        theRow.innerHTML = `
                            <div class="left-col" >
                            
                                <!-- <div class="spinner-border"></div> -->
                                <div class=" inside-col-row">
                                    <a href="javascript:void(0)" onclick="submitForm('${videoId}')" class="text-decoration-none the-redirectanchor" id="${videoId}">
                                    <div class=" col-ofimg">
                                        <div class="image-for-video-poster">
                                            <img src="${url}" loading="lazy" alt="" class="theposter-image">
                                        </div>
                                        <div class="col-for-video-details position-relative">
                                            <div class="video-details-text">
                                                <h3 class="thetitle">${title}</h3>
                                            </div>
                                            <div class="play-icon">
                                                <i class="fas fa-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                    
                                </div>
                            
                        </div>
                            `;
                            container.appendChild(theRow);
}
$('#theSearchForm').submit(function (e){
    e.preventDefault();
    let theContainer = document.getElementById('theRowForData');
        theContainer.innerHTML = '';
        let spinner = document.createElement('div');
        spinner.className = 'd-flex justify-content-center align-items-center theSpinnerDiv'
        spinner.innerHTML = `<div class='spinner-border'></div>`
        theContainer.appendChild(spinner);
    let theValue = $('#theSearchInput').val();
    (async function(){
        try {
            let req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${theValue}&key=${YOUTUBE_API_KEY}`);
        let data = await req.json();
        console.log(data.items.length)
        
        
        theContainer.innerHTML = '';
        if(data.items.length>0){
            data.items.map(detail => {
        
                // console.log(detail.id.videoId);
                theRowMan(detail.snippet.thumbnails.medium.url, detail.snippet.title, detail.id.videoId, theContainer);
            });
        }else{
            theContainer.innerHTML = `<h6 class='text-center'>Sorry no results found</h6>`
        }
        } catch (error) {
            theContainer.innerHTML = `<h6 class='text-center'>${error}</h6>`
        }
        
    })();
})
function submitForm(id){
    $('#theFormInput').val("https://www.youtube.com/watch?v=" + id);
    $('.formSmall').attr('action', 'downloadResult.php?videoId=' + id)
    $('#submit').click();
}

function showHideBar(){
    if($('.menu-forhamburger').hasClass('hamburgerShow')){
        $('.menu-forhamburger').removeClass('hamburgerShow')
        $('.menu-forhamburger').addClass('hamburger-hide')
    }else if($('.menu-forhamburger').hasClass('hamburger-hide')){

        $('.menu-forhamburger').removeClass('hamburger-hide')
        $('.menu-forhamburger').addClass('hamburgerShow')
    }
}