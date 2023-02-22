text_area = document.querySelector('.post-content');
//add eventlistener
text_area.addEventListener('input',autoResize,false)

function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
//preview image
const fileInput = document.querySelector('.post-avatar');
  const previewImage = document.getElementById("previewImage");

  fileInput.addEventListener("change", function() {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
      previewImage.src = reader.result;
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  });
  //cancel
  const cancelBtn = document.querySelector('.cancel_button');
  cancelBtn.addEventListener('click',function(event){
    event.preventDefault();
    window.history.back();
  })