import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const iconExpo = L.icon({iconUrl: "/images/marker-expo-line.png"})

const iconMillenium = L.icon({iconUrl: "/images/marker-millenium-line.png"})

const polylineMillenium:[number, number][] = [
    [49.26590, -123.07900], //VCC-Clark Station
    [49.26260, -123.06920], //Commercial-Broadway Station
    [49.25890, -123.04540], //Renfrew Station
    [49.26090, -123.03290], //Rupert Station
    [49.26500, -123.01360], //Gilmore Station
    [49.26640, -123.00160], //Brentwood Town Centre Station
    [49.26470, -122.98220], //Holdom Station
    [49.15330, -122.57500], //Sperling-Burnaby Lake Station
    [49.25560, -122.93920], //Lake City Way Station
    [49.25340, -122.91980], //Production Way-University Station
    [49.24850, -122.89700], //Lougheed Town Centre Station
    [49.26130, -122.88990], //Burquitlam Station
    [49.27800, -122.84600], //Moody Centre Station
    [49.27720, -122.82820], //Inlet Centre Station
    [49.27390, -122.80010], //Coquitlam Centre Station
    [49.28040, -122.79390], //Lincoln Station
    [49.28560, -122.79160], //Lafarge Lake-Douglas Station
]

const multiPolylineExpo:[number, number][][] = [
    [
        [49.28609, -123.11138], //Waterfront Station
        [49.28560, -123.12020], //Burrard Station
        [49.28330, -123.11610], //Granville Station
        [49.27960, -123.10980], //Stadium-Chinatown Station
        [49.27320, -123.10030], //Main Street-Science World Station
        [49.26260, -123.06920], //Commercial-Broadway Station
        [49.24830, -123.05590], //Nanaimo Station
        [49.24430, -123.04610], //29th Ave Station
        [49.23840, -123.03180], //Joyce-Collingwood Station
        [49.22980, -123.01270], //Patterson Station
        [49.22580, -123.00390], //Metrotown Station
        [49.22010, -122.98850], //Royal Oak Station
        [49.21230, -122.95920], //Edmonds Station
        [49.20000, -122.94900], //22nd Street Station
        [49.20150, -122.91260], //New Westminster Station
        [49.20480, -122.90610], //Columbia Station
        [49.20440, -122.87430], //Scott Road Station
        [49.19900, -122.85070], //Gateway Station
        [49.18960, -122.84800], //Surrey Central Station
        [49.18280, -122.84480], //King George Station
    ],
    [
        [49.20480, -122.90610], //Columbia Station
        [49.22470, -122.88910], //Sapperton Station
        [49.23330, -122.88290], //Braid Station
        [49.25340, -122.91980], //Production Way-University Station
    ]
]

const blueOptions = { color: 'blue' }
const yellowOptions = { color: 'yellow' }


const center:[number, number] = [49.25299, -123.00600];

const Map = () => {
    return(
        <MapContainer
            style={{height: "100vh"}}
            center={[49.28614, -123.11078]}
            zoom={16}
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/giovanabirck/expo-line-and-millennium-line">By Giovana Birck</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[49.28609, -123.11138]} icon={iconExpo}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>

            <Polyline pathOptions={blueOptions} positions={multiPolylineExpo}/>

            <Marker position={[49.25299, -123.00600]} icon={iconMillenium}>
                <Popup>
                    VCC-Clark
                </Popup>
            </Marker>

            <Polyline pathOptions={yellowOptions} positions={polylineMillenium}/>

        </MapContainer>
    )
}

export default Map;