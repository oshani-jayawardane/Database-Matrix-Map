const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    name: { type: String},
    image: { type: String},
    dbModel: { type: String},
    secondaryModels: { type: [String]},
    vendor: { type: String},
    dbFlavors: { type: [String]},
    currentLTSRelease: { type: String},
    supportedDBVersions: { type: String},
    supportedOSVersions: { type: String},
    ReplicationTools: { type: [String]},
    HighAvailability: { type: [String]}
});

const DbModel = mongoose.model("db", dbSchema);

module.exports = DbModel;