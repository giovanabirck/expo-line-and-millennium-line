import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const iconExpo = L.icon({
    iconUrl: "/images/marker-expo-line.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
})

const iconMillenium = L.icon({iconUrl: "/images/marker-millenium-line.png"})

const polylineMillenium:[number, number][] = [
    [49.26590, -123.07900], //VCC-Clark Station
    [49.26260, -123.06920], //Commercial-Broadway Station
    [49.25890, -123.04540], //Renfrew Station
    [49.26090, -123.03290], //Rupert Station
    [49.26500, -123.01360], //Gilmore Station
    [49.26640, -123.00160], //Brentwood Town Centre Station
    [49.26470, -122.98220], //Holdom Station
    [49.25900, -122.96500], //Sperling-Burnaby Lake Station
    [49.25460, -122.93920], //Lake City Way Station
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
        [49.28775, -123.11638],
        [49.28810, -123.11838],
        [49.28799, -123.11938],
        [49.28750, -123.12030],
        [49.28650, -123.12050],
        [49.28560, -123.11970], //Burrard Station
        [49.28330, -123.11610], //Granville Station
        [49.27960, -123.10980], //Stadium-Chinatown Station
        [49.27810, -123.10710],
        [49.27790, -123.10650],
        [49.27760, -123.10400],
        [49.27700, -123.10290],
        [49.27610, -123.10250],
        [49.27400, -123.10230],
        [49.27350, -123.10200],
        [49.27320, -123.10045], //Main Street-Science World Station
        [49.27290, -123.09900],
        [49.27240, -123.09750],
        [49.26980, -123.08300],
        [49.26935, -123.08150],
        [49.26850, -123.08030],
        [49.26710, -123.07920],
        [49.26655, -123.07850],
        [49.26630, -123.07800],
        [49.26370, -123.06980],
        [49.26340, -123.06930],
        [49.26310, -123.06909],
        [49.26260, -123.06900], //Commercial-Broadway Station
        [49.25600, -123.06900],
        [49.25500, -123.06850],
        [49.25400, -123.06750],
        [49.25200, -123.06480],
        [49.24830, -123.05590], //Nanaimo Station
        [49.24430, -123.04610], //29th Ave Station
        [49.23840, -123.03180], //Joyce-Collingwood Station
        [49.22980, -123.01270], //Patterson Station
        [49.22580, -123.00390], //Metrotown Station
        [49.22150, -122.99450], 
        [49.22010, -122.98850], //Royal Oak Station
        [49.21810, -122.97900],
        [49.21500, -122.97200],
        [49.21470, -122.97000],
        [49.21500, -122.96300],
        [49.21450, -122.96100],
        [49.21230, -122.95920], //Edmonds Station
        [49.20910, -122.95690],
        [49.20850, -122.95650],
        [49.20790, -122.95650],
        [49.20700, -122.95690],
        [49.20450, -122.95870],
        [49.20300, -122.95880],
        [49.20200, -122.95850],
        [49.20100, -122.95750],
        [49.20010, -122.95600],
        [49.19980, -122.95500],
        [49.19950, -122.95300],
        [49.19960, -122.95100],
        [49.20000, -122.94900], //22nd Street Station
        [49.20090, -122.94600],
        [49.20130, -122.94150],
        [49.20250, -122.93900],
        [49.20390, -122.93400],
        [49.20320, -122.92790],
        [49.20280, -122.92700],
        [49.20120, -122.92500],
        [49.20030, -122.92050],
        [49.20000, -122.91650],
        [49.20030, -122.91470],
        [49.20150, -122.91260], //New Westminster Station
        [49.20480, -122.90610], //Columbia Station
        [49.20630, -122.90300],
        [49.20660, -122.90200],
        [49.20640, -122.90000],
        [49.20360, -122.88900],
        [49.20330, -122.88600],
        [49.20330, -122.88400],
        [49.20440, -122.87430], //Scott Road Station
        [49.20495, -122.87000],
        [49.20699, -122.86200],
        [49.20710, -122.85950],
        [49.20650, -122.85700],
        [49.20280, -122.85150],
        [49.20200, -122.85080],
        [49.20100, -122.85060],
        [49.19900, -122.85070], //Gateway Station
        [49.19500, -122.85070],
        [49.19450, -122.85060],
        [49.19400, -122.85020],
        [49.19200, -122.84800],
        [49.19100, -122.84780],
        [49.18960, -122.84790], //Surrey Central Station
        [49.18850, -122.84790],
        [49.18730, -122.84710],
        [49.18690, -122.84700],
        [49.18430, -122.84700],
        [49.18390, -122.84680],
        [49.18350, -122.84640],
        [49.18280, -122.84480], //King George Station
    ],
    [
        [49.20480, -122.90610], //Columbia Station
        [49.20630, -122.90300],
        [49.20660, -122.90200],
        [49.20660, -122.90100],
        [49.20800, -122.89900],
        [49.20900, -122.89800],
        [49.21000, -122.89700],
        [49.21200, -122.89600],
        [49.21300, -122.89500],
        [49.21500, -122.89400],
        [49.21800, -122.89300],
        [49.22200, -122.89190],
        [49.22280, -122.89150],
        [49.22470, -122.88910], //Sapperton Station
        [49.22950, -122.88350],
        [49.23100, -122.88250],
        [49.23330, -122.88290], //Braid Station
        [49.23600, -122.88350],
        [49.23660, -122.88400],
        [49.24020, -122.89000],
        [49.24080, -122.89100],
        [49.24150, -122.89200],
        [49.24300, -122.89280],
        [49.24550, -122.89280],
        [49.24620, -122.89300],
        [49.24660, -122.89350],
        [49.24660, -122.89400],
        [49.24920, -122.89900],
        [49.25005, -122.90100],
        [49.25070, -122.90300],
        [49.25340, -122.91980], //Production Way-University Station
    ]
]

const blueOptions = { color: '#4282F5' }
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

            <Marker position={[49.28560, -123.11970]} icon={iconExpo}>
                <Popup>
                    Burrard Station
                </Popup>
            </Marker>

            <Marker position={[49.28330, -123.11610]} icon={iconExpo}>
                <Popup>
                    Granville Station
                </Popup>
            </Marker>

            <Marker position={[49.27960, -123.10980]} icon={iconExpo}>
                <Popup>
                    Stadium-Chinatown Station
                </Popup>
            </Marker>

            <Marker position={[49.27320, -123.10045]} icon={iconExpo}>
                <Popup>
                    Main Street-Science World Station
                </Popup>
            </Marker>

            <Marker position={[49.26260, -123.06900]} icon={iconExpo}>
                <Popup>
                    Commercial-Broadway Station
                </Popup>
            </Marker>

            <Marker position={[49.24830, -123.05590]} icon={iconExpo}>
                <Popup>
                    Nanaimo Station
                </Popup>
            </Marker>

            <Marker position={[49.24430, -123.04610]} icon={iconExpo}>
                <Popup>
                    29th Ave Station
                </Popup>
            </Marker>

            <Marker position={[49.23840, -123.03180]} icon={iconExpo}>
                <Popup>
                    Joyce-Collingwood Station
                </Popup>
            </Marker>

            <Marker position={[49.22980, -123.01270]} icon={iconExpo}>
                <Popup>
                    Patterson Station
                </Popup>
            </Marker>

            <Marker position={[49.22580, -123.00390]} icon={iconExpo}>
                <Popup>
                    Metrotown Station
                </Popup>
            </Marker>

            <Marker position={[49.22010, -122.98850]} icon={iconExpo}>
                <Popup>
                    Royal Oak Station
                </Popup>
            </Marker>

            <Marker position={[49.21230, -122.95920]} icon={iconExpo}>
                <Popup>
                    Edmonds Station
                </Popup>
            </Marker>

            <Marker position={[49.20000, -122.94900]} icon={iconExpo}>
                <Popup>
                    22nd Street Station
                </Popup>
            </Marker>

            <Marker position={[49.20150, -122.91260]} icon={iconExpo}>
                <Popup>
                    New Westminster Station
                </Popup>
            </Marker>

            <Marker position={[49.20480, -122.90610]} icon={iconExpo}>
                <Popup>
                    Columbia Station
                </Popup>
            </Marker>

            <Marker position={[49.20440, -122.87430]} icon={iconExpo}>
                <Popup>
                    Scott Road Station
                </Popup>
            </Marker>

            <Marker position={[49.19900, -122.85070]} icon={iconExpo}>
                <Popup>
                    Gateway Station
                </Popup>
            </Marker>

            <Marker position={[49.18960, -122.84790]} icon={iconExpo}>
                <Popup>
                    Surrey Central Station
                </Popup>
            </Marker>

            <Marker position={[49.18280, -122.84480]} icon={iconExpo}>
                <Popup>
                    King George Station
                </Popup>
            </Marker>

            <Marker position={[49.22470, -122.88910]} icon={iconExpo}>
                <Popup>
                    Sapperton Station
                </Popup>
            </Marker>

            <Marker position={[49.23330, -122.88290]} icon={iconExpo}>
                <Popup>
                    Braid Station
                </Popup>
            </Marker>

            <Marker position={[49.25340, -122.91980]} icon={iconExpo}>
                <Popup>
                    Production Way-University Station
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