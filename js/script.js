function handleKeyPress(event) {
    if (event.key === 'Enter') {
        hitungLuas();
    }
    if (event.key === 'Enter') {
        hitungKeliling();
    }
}

function resetLuas() {

    document.getElementById('nilaiSisiLuas').value = '';

    document.getElementById('resultContainerLuas').innerHTML = '';
}

function hitungLuas() {
    var nilaiSisi = document.getElementById('nilaiSisiLuas').value;
    var resultContainer = document.getElementById('resultContainerLuas');

    if (nilaiSisi !== "") {
        nilaiSisi = parseFloat(nilaiSisi);

        if (!isNaN(nilaiSisi)) {
            var luas = nilaiSisi * nilaiSisi;

            resultContainer.innerHTML = 'L = S x S ' + '<br>L = ' + nilaiSisi + ' x ' + nilaiSisi + '<br>L = ' + luas;
        } else {
            resultContainer.innerHTML = 'Please enter a valid number.';
        }
    } else {
        resultContainer.innerHTML = 'Please enter a number.';
    }
}

function resetKeliling() {

    document.getElementById('nilaiSisiKeliling').value = '';

    document.getElementById('resultContainerKeliling').innerHTML = '';
}

function hitungKeliling() {
    var nilaiSisi = document.getElementById('nilaiSisiKeliling').value;
    var resultContainer = document.getElementById('resultContainerKeliling');

    if (nilaiSisi !== "") {
        nilaiSisi = parseFloat(nilaiSisi);

        if (!isNaN(nilaiSisi)) {
            var keliling = 4 * nilaiSisi;

            resultContainer.innerHTML = 'K = 4 x S' + '<br>K = 4 x ' + nilaiSisi + '<br>K = ' + keliling;
        } else {
            resultContainer.innerHTML = 'Please enter a valid number.';
        }
    } else {
        resultContainer.innerHTML = 'Please enter a number.';
    }
}

document.querySelector('.reset-button-container')