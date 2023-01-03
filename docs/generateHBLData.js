
const containersNames = ["Ever Ace","Ever Act","HMM Algeciras","HMM Copenhagen","HMM Dublin","HMM Gdansk","HMM Hamburg","HMM Helsinki","HMM Le Havre","HMM Oslo","HMM Rotterdam","HMM Southampton","HMM Stockholm","HMM St Petersburg","MSC Gülsün","MSC Samar","MSC Leni","MSC Mia","MSC Febe","MSC Ambra","MSC Mina","MSC Isabella","MSC Arina","MSC Nela","MSC Sixin","MSC Apolline","MSC Amelia","MSC Diletta","MSC Michelle","CMA CGM Jacques Saadé","CMA CGM Champs Elysées","CMA CGM Palais Royal","CMA CGM Louvre","CMA CGM Rivoli","CMA CGM Montmartre","CMA CGM Concorde","CMA CGM Trocadero","CMA CGM Sorbonne","OOCL Hong Kong","OOCL Germany","OOCL Japan","OOCL United Kingdom","OOCL Scandinavia","OOCL Indonesia","COSCO Shipping Universe","COSCO Shipping Nebula","COSCO Shipping Galaxy","COSCO Shipping Solar","COSCO Shipping Star","COSCO Shipping Planet","CMA CGM Antoine de Saint Exupéry","CMA CGM Jean Mermoz","CMA CGM Louis Blériot","Madrid Maersk","Munich Maersk","Moscow Maersk","Milan Maersk","Monaco Maersk","Marseille Maersk","Manchester Maersk","Murcia Maersk","Manila Maersk","Mumbai Maersk","Maastricht Maersk","MOL Truth","MOL Treasure","MOL Triumph","MOL Trust","MOL Tribute","MOL Tradition","Ever Glory","Ever Govern","Ever Globe","Ever Greet","Ever Golden","Ever Goods","Ever Genius","Ever Given","Ever Gifted","Ever Grade","Ever Gentle","COSCO Shipping Taurus","COSCO Shipping Gemini","COSCO Shipping Virgo","COSCO Shipping Libra","COSCO Shipping Sagittarius"];
const carrierNames = [" Denmark","  Switzerland,  Italy"," France"," China"," Germany"," Japan"," Taiwan"," South Korea"," Taiwan"," Israel"," Taiwan"," Singapore"," China"," South Korea"," Iran"," China"," Singapore"," China"," South Korea"," Taiwan"," Denmark"," Thailand"," United States"," Singapore"," China"," United Arab Emirates"," South Korea"," Turkey"," Indonesia"," United Arab Emirates"];

let containerList = [];

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function formatDate(inp) {
    let inDate = new Date(inp);
    let options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
    };  
    return inDate.toLocaleTimeString("en-us", options);
}

for(let i=0; i<2; i++) {
    let contNum = 'HLCU' + randomIntFromInterval(13521, 95625);
    let ss = [];
    for(let j=0; j<5; j++) {
        let manifest = randomIntFromInterval(1,7);
        ss.push({
            hblNumber: 'HBL' + randomIntFromInterval(13521, 95625),
            mark: contNum,
            manifestedPieces: manifest,
            unloaded: 0,
            balance: manifest,
            unloadEntries: []
        });
    }
    containerList.push({
        container: contNum,
        vessel: containersNames[randomIntFromInterval(0,86)],
        Manifest: randomIntFromInterval(101, 999) + 'W',
        carrier: ('' + carrierNames[randomIntFromInterval(0,30)]).trim(),
        eta: formatDate( (new Date()).getTime() + ( 1000 * 60 * 60 * randomIntFromInterval(15,25) * i ) ),
        hblList: ss
    });
    // { container: 'HLCU7890884', vessel: 'MAERSK BANGARA', Manifest: '009W', carrier: 'MARESK', eta: '29-Sep-21' },
    // { HBL: 'HBL001', MARK: 'SPARK LINE PO BOX 678', MANIFESTED_PIECES: 9, UNLOADED_PACKAGING: 4, BALANCE: 5},
}

// console.log(JSON.stringify(containerList))

// console.log(JSON.stringify(containerList))

const fs = require('fs')


fs.writeFile('out.json', JSON.stringify(containerList), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})


