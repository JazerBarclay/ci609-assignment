const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') app.use(express.static(path.join(__dirname, 'zap-app-client/build')));
else app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));