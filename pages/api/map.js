import { v4 as uuidv4 } from 'uuid'
const companies = [
    {
        key:uuidv4(),
        name: 'Sardo',
        latitude: -7.945902319311787, 
        longitude: 112.60871831525874,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Malang Town Square',
        latitude: -7.956187859131487, 
        longitude: 112.61837442950056,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'State University of Malang',
        latitude: -7.960565687574259, 
        longitude: 112.61751622799005,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Kopi Studio',
        latitude: -7.95393532643727, 
        longitude: 112.60618631494354,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'RSI UNISMA',
        latitude: -7.9393568157480505, 
        longitude: 112.60901870818157,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Mitufaya',
        latitude: -7.943393953315983, 
        longitude: 112.62845942017573,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'My Mask',
        latitude: -7.945604696928785, 
        longitude: 112.61614258622424,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Villa Puncak Tidar',
        latitude: -7.959418051282175, 
        longitude: 112.59567174284707,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Cobek Kitchen',
        latitude: -7.957208034811299, 
        longitude: 112.60906166259,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    {
        key:uuidv4(),
        name: 'Wuffy Space',
        latitude: -7.956102452176085, 
        longitude: 112.6302625614918,
        image:'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
        types:['echoengineering','green tech', 'consulting'],
        location:'Indonesia'
    },
    
]
export default function handler(req, res) {
    res.status(200).json({ companies: companies })
  }
  