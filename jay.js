 const container = document.querySelector(".container");

const toggleForm = () => {
    if (container.classList.contains('right-panel-active')) {
        container.classList.remove("right-panel-active");
    } else {
        container.classList.add("right-panel-active");
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    alert('wee mzee')
}
