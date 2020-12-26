const Pool = require("pg").Pool;
const pool = new Pool({
    user: "catfe",
    host: "localhost",
    database: "catfedb",
    password: "meowmeow",
    port: 5432,
});

const insertContact = (request, response) => {
    const {
        firstname,
        lastname,
        phone,
        email,
        country,
        comment,
    } = request.body;

    pool.query(
        "INSERT INTO contacts (firstname,lastname,phone,email,country,comment) VALUES ($1,$2,$3,$4,$5,$6)",
        [firstname, lastname, phone, email, country, comment],
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).send(`Contact information was added`);
        }
    );
};

module.exports = {
    insertContact,
};
