let theHref = window.location.href;
if(theHref.includes('?')){
    let theLink = theHref.split('?')[1];
    let theAnchor = document.createElement('a');
    theAnchor.href = "downloader.php?" + theLink;
    theAnchor.className = 'theDownloadAnchorMan'
    theAnchor.innerHTML = 'download the video here';
    document.getElementById('thedownloaderdiv').appendChild(theAnchor)
}