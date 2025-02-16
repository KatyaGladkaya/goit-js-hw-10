import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const delay = parseInt(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolveConfig, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolveConfig(delay);
            }
            else {
                reject(delay);
            }
        }, delay);
    });
    promise
        .then((delay) => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",

            });
        })
        .catch((delay) => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${delay}ms`,
                position: "topRight",
            });
        });

});


