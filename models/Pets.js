const mongoose = require('mongoose');

const PetsSchema = new mongoose.Schema({
    impound_no: String,
    Animal_ID: String,
    Data_Source: String,
    Record_Type: String,
    Current_Location: String,
    Animal_Name: String,
    animal_type: String,
    Age: String,
    Animal_Gender: String,
    Animal_Breed: String,
    Date: { type: Date, default: Date.now },
    Date_Type: String,
    Obfuscated_Address: String,
    City: String,
    State: String,
    Zip: String,
    jurisdiction: String,
    Image: String,
}, {
    versionKey: false
});

module.exports = mongoose.model('Pets', PetsSchema);
