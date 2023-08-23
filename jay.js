const container = document.querySelector(".container");
const input = document.getElementById('profile');
const img = document.getElementById('imgDisplay');

const toggleForm = () => {
    if (container.classList.contains('right-panel-active')) {
        container.classList.remove("right-panel-active");
    } else {
        container.classList.add("right-panel-active");
    }
};

const handleFile = () => {
    const selectedPhoto = input.files[0];
    if (selectedPhoto) {
        console.log(selectedPhoto)
        const photoUrl = URL.createObjectURL(selectedPhoto)
        img.src = photoUrl;
    }
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('wee mzee')
}
