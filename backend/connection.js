require('dotenv').config();
const mongoose = require('mongoose');

main()
.then(res=>{
    console.log('conectado ao mongodb')
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.naz2bvi.mongodb.net/chatappMern?retryWrites=true&w=majority`);
}

module.exports = mongoose;