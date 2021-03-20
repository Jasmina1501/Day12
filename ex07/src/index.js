var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    var object = [...oldCollection]
    if(prop !== "tracks" && value !== "") {
        object.id.prop.push(value);
        return object.id;
    } else if(prop === "tracks" && id !== "tracks") {
        var prop = [];
        object.id.prop.push(value);
        return object.id;
    } else if(prop === "tracks" && value !== "") {
        object.id.prop.push(value);
        return object.id;
    } else if(value === "") {
        delete object.id.prop;
        return object.id;
    }
}
console.log(updateRecords(collection, 5439, "artist", "ABBA"));
module.exports=updateRecords;