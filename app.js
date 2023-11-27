const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Server läuft!');
});

app.use(express.static('public'));

// Statische Dateien ausliefern
app.use('/static', express.static('public'));

// API-Endpunkt für JSON
app.get('/api/pinRed', (req, res) => {
    fs.readFile('./public/pinRed.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Fehler beim Lesen der Datei:", err);
            res.status(500).json({ error: "Fehler beim Lesen der Datei" });
            return;
        }
        res.json(JSON.parse(data));
    });
});
// variabel übergeben anstatt Pfade (/api/pin/{color/id) URL kannst du auslesen app.get(users/:userid  expressjs.com
app.get('/api/pinBlue', (req, res) => {
    fs.readFile('./public/pinBlue.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Fehler beim Lesen der Datei:", err);
            res.status(500).json({ error: "Fehler beim Lesen der Datei" });
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});
