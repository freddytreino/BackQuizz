const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)
const URL = process.env.url
async function main() {
    await mongoose.connect(URL)
    console.log("Conectado o banco com sucesso")
}
main().catch((err) => console.log(err))
module.exports = main