// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.

const imagesEl = document.getElementById("images");

async function getImages(){
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();

    data.forEach((image) => {
        const imgTag = document.createElement("img");
        
        if (image.id <= 20) {
            imgTag.src = image.thumbnailUrl;
        }
        
        imagesEl.appendChild(imgTag);
    });
}

getImages();