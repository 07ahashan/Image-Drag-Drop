const DragArea = document.getElementById("Drag_Area");
const inputfile = document.getElementById("input-file");
const ImageArea = document.getElementById("Img_Area");

inputfile.addEventListener("change",uploadImage);

function uploadImage()
{
    let imgLink = URL.createObjectURL(inputfile.files[0]);
    ImageArea.style.backgroundImage=`url(${imgLink})`;
    ImageArea.textContent="";
    ImageArea.style.border= 0;
} 

DragArea.addEventListener("dragover", function(e)
{
    e.preventDefault();    
});

DragArea.addEventListener("drop", function(e)
{
    e.preventDefault(); 
    inputfile.files = e.dataTransfer.files;
    uploadImage();   
});

