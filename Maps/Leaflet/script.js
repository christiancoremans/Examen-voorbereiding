var map = L.map('map').setView([51.60721772943285, 4.7775936388997255], 6);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.60721772943285, 4.7775936388997255]).addTo(map);
marker.bindPopup("<b>Hier ben ik!</b><br>Dit is mijn school.").openPopup();

var AH = L.marker([51.60751380850403, 4.789273809387671],).addTo(map);
AH.bindPopup("Dit is de AH").openPopup();

var sportschool = L.marker([51.57168985614625, 4.664873607451088]).addTo(map);
sportschool.bindPopup("Dit is de sportschool").openPopup();
sportschool.setIcon(L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2933/2933807.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
}));

var circle = L.circle([51.6412039206851, 4.860308504717963], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

// 51.535459016482335, 4.462932779987983
var circleRoosendaal = L.circle([51.535459016482335, 4.462932779987983], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);


let coordinates = [
    [51.35059014459075, 3.2834608445179323],
    [53.234136779396565, 4.843533136347963],
    [53.78072351018921, 8.004712840230319],
    [50.77055206594897, 5.685019552711643],
];

function getBounds(coords) {
    let lats = coords.map(c => c[0]);
    let lngs = coords.map(c => c[1]);

    return {
        minLat: Math.min(...lats),
        maxLat: Math.max(...lats),
        minLng: Math.min(...lngs),
        maxLng: Math.max(...lngs),
    };
}
function getRandomCoordinate(coords) {
    const bounds = getBounds(coords);

    const lat = bounds.minLat + Math.random() * (bounds.maxLat - bounds.minLat);
    const lng = bounds.minLng + Math.random() * (bounds.maxLng - bounds.minLng);

    return [lat, lng];
}

// setInterval(() => {
//     const randomCoord = getRandomCoordinate(coordinates);
//     L.marker(randomCoord).addTo(map);
// }, 2000);

const randomCoord = getRandomCoordinate(coordinates);

L.marker(randomCoord).addTo(map);