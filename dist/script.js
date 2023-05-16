const selectElement = document.getElementById("persentil");
const optionsA = [
    { value: "", text: "Pilih Persentil" },
    { value: "100", text: "Peringkat (1-15)%" },
    { value: "90", text: "Peringkat (16-30)%" },
    { value: "80", text: "Peringkat (31-45)%" },
    { value: "70", text: "Peringkat (46-60)%" },
    { value: "60", text: "Peringkat (61-100)%" },
];
const optionsB = [
    { value: "", text: "Pilih Persentil" },
    { value: "100", text: "Peringkat (1-10)%" },
    { value: "90", text: "Peringkat (11-20)%" },
    { value: "80", text: "Peringkat (21-30)%" },
    { value: "70", text: "Peringkat (31-40)%" },
    { value: "60", text: "Peringkat (41-100)%" },
];
const optionsC = [
    { value: "", text: "Pilih Persentil" },
    { value: "100", text: "Peringkat (1-5)%" },
    { value: "90", text: "Peringkat (6-10)%" },
    { value: "80", text: "Peringkat (11-15)%" },
    { value: "70", text: "Peringkat (16-20)%" },
    { value: "60", text: "Peringkat (21-100)%" },
];

// Ganti ke point (.) apabila ketik koma
const rapor = document.querySelector('#rapor')
rapor.addEventListener('change', e => {
    e.currentTarget.value = parseFloat(e.currentTarget.value).toFixed(2)
})

let akreditasi = document.querySelector('#akreditasi')
akreditasi.addEventListener('change', function createListPersentil() {
    let nilakreditasi = document.getElementById("akreditasi").value;
    if (nilakreditasi == "A") {
        bikinOptionPersentil(optionsA)
    }
    else if (nilakreditasi == "B") {
        bikinOptionPersentil(optionsB)
    }
    else {
        bikinOptionPersentil(optionsC)
    }

}
);






function bikinOptionPersentil(options) {

    // hapus element sebelumnya
    for (let i = selectElement.options.length - 1; i >= 0; i--) {
        selectElement.remove(i);
    }


    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.text;
        selectElement.appendChild(optionElement);
    });
}

const start = document.querySelector('#calculate')
start.addEventListener("click", function () {

    let tableResultAkademik = "<table table><tr><td>Rapor (30%)</td><td>:</td><td>" + document.getElementById('rapor').value + "</td></tr><tr><td>Persentil (30%)</td><td>:</td><td></td></tr><tr><td>Pres. Akademik (30%)</td><td>:</td><td></td></tr><tr><td>Pres. Non Akademik (5%)</td><td>:</td><td></td></tr><tr><td>Persentil NonAkdmk (5%)</td><td>:</td><td></td></tr></table>";
    let tableResultNonAkademik = "<table table><tr><td>Rapor (10%)</td><td>:</td><td>" + document.getElementById('rapor').value + "</td></tr><tr><td>Persentil (10%)</td><td>:</td><td></td></tr><tr><td>Pres. Akademik (5%)</td><td>:</td><td></td></tr><tr><td>Pres. Non Akademik (40%)</td><td>:</td><td></td></tr><tr><td>Persentil NonAkdmk (40%)</td><td>:</td><td></td></tr></table>";
    document.getElementById('hasil').innerHTML = '';
    document.getElementById('divHidden').style.display = 'block';
    if (document.getElementById("type").value == 1) { document.getElementById('hasil').innerHTML = tableResultAkademik; }
    else { document.getElementById('hasil').innerHTML = tableResultNonAkademik; }

});

