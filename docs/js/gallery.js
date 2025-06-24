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

function tabAdder(){
    var i = 0;
    const testArr = document.getElementsByClassName("preview");
    for (i = 0, i <= testArr.length, i++){
        document.
    }
}