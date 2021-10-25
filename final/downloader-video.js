
const mainDiv = e => document.querySelector(e);
const render = mainDiv('.result');
$('.result').hide()

// create video
const createVideo = data => {
  $('.result').show()
  let v = document.createElement('video');
  v.id = "instavideo";
  v.src = data.content; 
  v.controls = true;
  v.autoplay = false;
  let anc = document.createElement('a')
  anc.href = data.content
  anc.download = "hello"
  anc.className = "download-button-small"
  anc.setAttribute('download',"video")
  anc.target = "_blank"
  anc.innerHTML = '<i class="fas fa-download mr-2"></i>Click there to download' 
  let arrow = document.createElement('i')
  arrow.className = 'fas fa-angle-double-left arrow-img animate__animated animate__headShake'
  
  let divi = document.createElement('div')
  divi.className = "lower-svg"
  divi.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;" xml:space="preserve">
  <path stroke-linecap="round" stroke-linejoin="round" class="st0 draw-arrow" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-1" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-2" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
</svg>`
  

  // create info
  // let info = document.createElement('p');
  // info.textContent = "Click the right button on video and select save as.";

  render.innerHTML = ""; 
  render.appendChild(v);
  render.appendChild(anc)
  render.appendChild(arrow)
  render.appendChild(divi)
  $('.download-button').hide()
  $('.url-field').hide()
  $('.cross').hide()
  $('.a_demo_four').show()
  $('.label-text').hide()
 
  // render.appendChild(info);
};
// create image
// const createImg = data => {
//   // create image
//   let i = document.createElement('img');
//   i.id = "instaImg";
//   i.src = data.content;
//   let anc = document.createElement('a')
//   anc.href = data.content
//   anc.download = "download"
  
  
//   anc.setAttribute('download',"image")
//   anc.target = "_blank"
//   anc.innerHTML = '<i class="fas fa-download mr-2"></i>download' 
//   // create info
//   let info = document.createElement('p');
//   // info.textContent = "Click the right button on the image and select save image..";

//   render.innerHTML = ""; 
//   render.appendChild(i); 
//   render.appendChild(anc)

//   // render.appendChild(info); 

// };

// extract html
const getMedia = () => {
  render.innerHTML = `<div class='image-placeholder'><div class="d-flex align-items-center justify-content-center">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div></div>`;
  // get input value
  let url = mainDiv('input').value;
  if (url) {
    fetch(url).
    then(r => r.text()).
    then(r => {
      // render html
      render.innerHTML = r;
      console.log(r)
      // wait, find meta and create video or image
      
      let w = setTimeout(() => {
        let v = mainDiv('meta[property="og:video"]');
        if (v) {
          
          createVideo(v);
        $('#message-for-non-image').hide()
        
          console.log(v)
        } else {
          let img = mainDiv('meta[property="og:image"]');
          if (img) {
           
            
            $('#message-for-non-image').show()
            document.getElementById('message-for-non-image').innerHTML= "<h3 class='text-center text-warning mt-3 font-weight-bold'>Please Enter a valid intagram video URL </h3>"
            
            // createImg(img);
            console.log(img)
          } else {
            document.body.innerHTML = body;
            alert('Error extracting Instagram image / video.');
          };
        }
        clearTimeout(w);
      }, 200);
    });
  } else {
    mainDiv('input').setAttribute('placeholder', 'Invalid address, use a proper Insagram link');

  }
};
// $('.download-button-small').triggerHandler('contextmenu');
// $('#hello').trigger({
//   type: 'mousedown',
//   which: 3
// })
function clearInput(){
  $('.url-field').val("") 
}
// var token = 'YOUR INSTAGRAM TOKEN',
//     container2 = document.getElementById( 'rudr_userinfo' ),
//     scrElement2 = document.createElement( 'script' );
 
// window.mishaProcessResult2 = function( response ) {
//     this.console.log(response)
// 	container2.innerHTML = '<div><p><img src="' + response.data.profile_picture + '"></p></div>'
// 		+ '<div><h1>' + response.data.username + '</h1>'
// 		+ '<p>#' + response.data.id + '</p>'
// 		+ '<p>' + response.data.counts.media + ' media ' + response.data.counts.followed_by + ' followers ' + response.data.counts.follows + ' follows</p>'
// 		+ '<p><strong>' + response.data.full_name + '</strong> ' + response.data.bio + '<a href="' + response.data.website + '">' + response.data.website + '</a></p></div>';
// }
 
// scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=mishaProcessResult2' );
// document.body.appendChild( scrElement2 );

// const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)
// const fetchInstagramPhotos = async (accountUrl) => {
//   const response = await get(accountUrl)
//   const json = JSON.parse(response.data.match(instagramRegExp)[1])
//   const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 8)
//   const photos = edges.map(({ node }) => {
//     return {
//       url: `https://www.instagram.com/p/${node.shortcode}/`,
//       thumbnailUrl: node.thumbnail_src,
//       displayUrl: node.display_url,
//       caption: node.edge_media_to_caption.edges[0].node.text
//     }
//   })
//   console.log(photos)
//   return photos
// }
// try {
//   const photos =  fetchInstagramPhotos('https://www.instagram.com/sunsetwithbubbles/')
//   // Do something with the photos
// } catch (e) {
//   console.error('Fetching Instagram photos failed', e)
// }
// async function lol(accountUrl){
//   let response = await fetch(accountUrl,{
//     method: "GET"
//   })
//   const json = JSON.parse(response.data.match(instagramRegExp)[1])
//   const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 8)
//   const photos = edges.map(({ node }) => {
//     return {
//       url: `https://www.instagram.com/p/${node.shortcode}/`,
//       thumbnailUrl: node.thumbnail_src,
//       displayUrl: node.display_url,
//       caption: node.edge_media_to_caption.edges[0].node.text
//     }
//   })
//   console.log(photos)
//   return photos
//  }
//  try {
//   const photos =  lol('https://www.instagram.com/sunsetwithbubbles/')
//   // Do something with the photos
// } catch (e) {
//   console.error('Fetching Instagram photos failed', e)
// }