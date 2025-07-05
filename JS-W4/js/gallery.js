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
    var testArr = document.querySelectorAll(".preview");
    for (i = 0; i < testArr.length; i++){
        testArr[i].setAttribute("tabindex","0")
        console.log("hi");
    }
}