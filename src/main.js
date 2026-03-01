import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = document.querySelector('[name="search-text"]').value;
    if (inputValue.trim() === "") {
        iziToast.show({
            message: "You need to type sonething for searching.",
            color: "red",
            position: "topRight"
        });
        return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(inputValue)
        .then(response => {
            hideLoader()
            if (response.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                color: 'red',
                position: 'topRight'
            })
    }
        else {
        createGallery(response.hits);
    }
        }
            )
        .catch(reject => {
            iziToast.show({
                message: "Something went wrong. Please try again!",
                color: 'red',
                position: 'topRight'
            });
            hideLoader();
    })
        
}