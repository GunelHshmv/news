const express = require('express');
const path = require('path');
const app = express();

// Statik dosyalar için 'build' klasörünü kullan
app.use(express.static(path.join(__dirname, 'build')));

// Tüm rotalar için 'index.html' dosyasını sun
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Uygulamayı belirli bir portta başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
