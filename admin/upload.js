document.getElementById('add-vetrina-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', document.getElementById('vetrina-file').files[0]);

    fetch('/admin/upload.php?type=vetrina', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => {
          alert('Immagine aggiunta alla vetrina con successo!');
      }).catch(error => {
          console.error('Errore:', error);
      });
});

document.getElementById('add-gallery-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', document.getElementById('gallery-file').files[0]);
    formData.append('galleryId', document.getElementById('gallery-id').value);

    fetch('/admin/upload.php?type=gallery', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => {
          alert('Immagine aggiunta alla galleria con successo!');
      }).catch(error => {
          console.error('Errore:', error);
      });
});
