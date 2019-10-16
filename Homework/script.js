const express = require('express');
const app = express();
app.get('/', (request, response) => {
    throw new Error("oops");
});
app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send("Something broke!");
});
app.listen(3000);