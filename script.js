<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pannello Admin</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Pannello di Amministrazione</h1>
    <form id="admin-form">
        <h2>Aggiungi Immagine alla Vetrina</h2>
        <label for="vetrina-src">URL Immagine:</label>
        <input type="text" id="vetrina-src" required>
        <label for="vetrina-alt">Testo Alternativo:</label>
        <input type="text" id="vetrina-alt" required>
        <label for="vetrina-id">ID Galleria:</label>
        <input type="text" id="vetrina-id" required>
        <button type="button" onclick="addVetrinaImage()">Aggiungi</button>
    </form>

    <h2>Aggiungi Immagine alla Galleria</h2>
    <form id="gallery-form">
        <label for="gallery-id">ID Galleria:</label>
        <input type="text" id="gallery-id" required>
        <label for="gallery-src">URL Immagine:</label>
        <input type="text" id="gallery-src" required>
        <label for="gallery-alt">Testo Alternativo:</label>
        <input type="text" id="gallery-alt" required>
        <label for="gallery-desc">Descrizione:</label>
        <input type="text" id="gallery-desc" required>
        <button type="button" onclick="addGalleryImage()">Aggiungi</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
