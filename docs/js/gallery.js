function upDate(previewPic){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo(){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.textContent = "";
}
