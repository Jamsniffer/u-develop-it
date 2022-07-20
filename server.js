const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Default response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});

// server start func
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});