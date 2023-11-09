// Izveido mainīgo, lai saņemtu ievades lauka vērtību
var uzdevumaTeksts = document.getElementById("uzdevumaTeksts");

// Izveido mainīgo, lai saņemtu saraksta elementu
var uzdevumuSaraksts = document.getElementById("uzdevumuSaraksts");

// Funkcija, lai pievienotu uzdevumu sarakstam
function pievienotUzdevumu() {
  // Iegūst tekstu no ievades lauka
  var uzdevumaNosaukums = uzdevumaTeksts.value;

  // Pārliecinās, vai ievades lauks nav tukšs
  if (uzdevumaNosaukums.trim() !== "") {
    // Izveido jaunu li elementu
    var uzdevumaElem = document.createElement("li");
    uzdevumaElem.className = "list-group-item";
    uzdevumaElem.innerHTML = `
            <span>${uzdevumaNosaukums}</span>
            <div>
                <input type="checkbox" onchange="atzimetIzpilditi(this)">
                <button class="btn btn-danger btn-sm ms-2" onclick="dzestUzdevumu(this)">Dzēst</button>
            </div>
        `;

    // Pievieno li elementu sarakstam
    uzdevumuSaraksts.appendChild(uzdevumaElem);

    // Notīra ievades lauku
    uzdevumaTeksts.value = "";
  }
}

// Funkcija, lai atzīmētu uzdevumu kā izpildītu
function atzimetIzpilditi(checkbox) {
  var uzdevumaElem = checkbox.closest("li");
  uzdevumaElem.classList.toggle("bg-success");
}

// Funkcija, lai dzēstu uzdevumu no saraksta
function dzestUzdevumu(button) {
  var uzdevumaElem = button.closest("li");
  uzdevumaElem.remove();
}
