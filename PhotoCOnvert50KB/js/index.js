var config = {
    onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        
        document.getElementById('progress-bar').style.width = percentCompleted + '%';
        document.querySelector('.upload-text').textContent = "Uploading file. Complete: " + percentCompleted + '%';
        if (percentCompleted >= 100) {
            
            document.querySelector('.converting').classList.remove('d-none');
            document.getElementById('progress-bar').style.width = 0 + '%';
        }
    }
};
function readUrl(input) {
    if (input.files && input.files[0] && input.files[0].size > (50 * 1024) && input.files[0].size < (9 * 1024 * 1024)) {
        let reader = new FileReader();
        let formData = new FormData();
        formData.append('image', input.files[0]);
      
        reader.onload = (e) => {
            let imgData = e.target.result;
            let imgName = input.files[0].name;
            document.querySelector('.upload-preview-img').src = e.target.result;
            input.setAttribute("data-title", imgName);
            document.querySelector('.content-forupload-progress').classList.remove('d-none');
            // axios.post('https://52.66.129.177:3000/api/compress', formData, config)
            axios.post('https://photoconvertinto50kb.com:3000/api/compress', formData, config)
                .then(response => {
                    
                    if (response.status == 200) {
                        document.querySelector('.content-forupload-progress').classList.add('d-none');
                        let newSize = response.data.finalImageSize * 1024;
                        
                        let changePercent = (((newSize * 100) / (response.data.fileData.size_in))).toFixed(0);
                        document.querySelector('.image-ready-container').classList.remove('d-none');
                        document.querySelector('.converting').classList.add('d-none');
                        document.querySelector('.preview').src = 'data:image/png;base64,' + response.data.imageFile;
                        document.getElementById('download-anchor').dataset.url = 'data:image/png;base64,' + response.data.imageFile;
                        // document.getElementById('download-anchor').download = response.data.fileData.path_out_new.split('/')[1];
                        let myString = response.data.fileData.path_out_new.split('/')[1]
                        document.getElementById('download-anchor').dataset.name = myString.substring(myString.indexOf('_')+1);
                        document.querySelector('.file-name').textContent = myString.substring(myString.indexOf('_')+1);
                        document.querySelector('.old-file-size').textContent = (response.data.fileData.size_in / 1024).toFixed(3) + ' kb';
                        document.querySelector('.new-file-size').textContent = (response.data.finalImageSize).toFixed(3) + ' kb';
                        document.querySelector('.percent-change').textContent = (100 - changePercent) + '%';
                    }
                })
                .catch(function(err) {
                   
                    alert(err);
                    document.querySelector('.content-forupload-progress').classList.add('d-none');
                    if(document.querySelector('.converting').classList.contains('d-none')){

                    }else{
                        document.querySelector('.converting').classList.add('d-none');
                    }
                });
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        alert('Please upload image greater then 20KB and less then 10Mb.')
    }
}

function downloadImg(val) {
    // console.log(val)
    
    fetch(val.dataset.url).then(res => res.blob()).then(blob => saveAs(blob, val.dataset.name))
    
}
function showShareBtns(){
  let sharer = document.querySelector('.sharer');
  if(sharer.classList.contains('active')){
   
    sharer.classList.remove('active');

  }else{
    
    sharer.classList.add('active')
  }
}

function display(input) {
   if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(event) {
         $('#myid').attr('src', event.target.result);
      }
      reader.readAsDataURL(input.files[0]);
   }
}