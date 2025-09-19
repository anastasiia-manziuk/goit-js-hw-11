
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as pixabay from "./js/pixabay-api"
import * as renderFunc from "./js/render-functions"

const button = document.querySelector('.butn')
const input = document.querySelector('.search-input')
const form = document.querySelector('.form')

function searchImages() {
    const query = input.value.trim();

    if (!query) {
        input.reportValidity();
        return;
    }

    renderFunc.clearGallery();
    
    
    renderFunc.showLoader();
    

    setTimeout(()=>{pixabay.getImagesByQuery(query)
        
        .then(images => {
            
            if (images.length === 0) {
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                
            } else {
                renderFunc.createGallery(images);
            }
        })

        .catch(err => {
            console.error(err)
        })
        
        .finally(() => {
            renderFunc.hideLoader();
        });
},3000)

}

form.addEventListener('submit', searchImages);


