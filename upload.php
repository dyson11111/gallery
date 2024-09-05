<?php
$uploadDir = '../images/';
$type = $_GET['type'];

if ($type === 'vetrina') {
    $uploadDir .= 'vetrina/';
} elseif ($type === 'gallery') {
    $galleryId = $_POST['galleryId'];
    $uploadDir .= $galleryId . '/';
} else {
    echo 'Tipo di upload non valido.';
    exit;
}

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $tmpName = $_FILES['file']['tmp_name'];
    $name = basename($_FILES['file']['name']);
    $uploadFile = $uploadDir . $name;

    if (move_uploaded_file($tmpName, $uploadFile)) {
        echo 'Immagine caricata con successo.';
    } else {
        echo 'Errore nel caricamento dell\'immagine.';
    }
} else {
    echo 'Nessun file caricato o errore nel caricamento.';
}
?>
