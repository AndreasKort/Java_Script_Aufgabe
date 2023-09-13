// Event-Listener hinzufügen
document.getElementById("fetchDataBtn").addEventListener("click", fetchData);

// fetchData-Funktion erstellen
function fetchData() {
    // Ein XMLHttpRequest-Objekt erstellen
    var xhr = new XMLHttpRequest();

    // GitHub-API-URL für Ihr Repository
    var githubRepoUrl = "https://api.github.com/repos/AndreasKort/Java_Script_Aufgabe";

    // GET-Anfrage an die GitHub-API senden
    xhr.open("GET", githubRepoUrl, true);

    // Event-Handler für die Antwort festlegen
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // Überprüfen, ob die Anfrage abgeschlossen ist
            if (xhr.status === 200) { // Überprüfen, ob die Anfrage erfolgreich war
                // Antwort verarbeiten (GitHub gibt JSON-Daten zurück)
                var responseData = JSON.parse(xhr.responseText);
                document.getElementById("result").innerHTML = "Repository-Name: " + responseData.name;
            } else {
                // Fehlerbehandlung, wenn die Anfrage fehlschlägt
                document.getElementById("result").innerHTML = "Fehler beim Abrufen der Daten.";
            }
        }
    };

    // Anfrage senden
    xhr.send();
}
