// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 25,
        description: "Reflective",
        image: "",
        color: 'white'
      },
      {
        firstName: 'Sara',
        lastName: 'Scarlett',
        occupation: 'Teacher',
        age: 32,
        description: "Good looking",
        image: "",
        color: 'white'
      },
      {
        firstName: 'Robert',
        lastName: 'Plum',
        occupation: 'Taxi Driver',
        age: 22,
        description: "Fast guy",
        image: "",
        color: 'white'
      },
      {
        firstName: 'Thomas',
        lastName: 'Peacock',
        occupation: 'Web dev',
        age: 50,
        description: "Good conections",
        image: "",
        color: 'black'
      },
      {
        firstName: 'Lisa',
        lastName: 'Peach',
        occupation: 'Scientific',
        age: 45,
        description: "Smart",
        image: "",
        color: 'black'
      },
      {
        firstName: 'Tony',
        lastName: 'Stark',
        occupation: 'Inventor',
        age: 39,
        description: "Clever",
        image: "",
        color: 'white'
      }
];


// Rooms Array

const roomsArray = [
    {name:'Kitchen'},
    {name:'Ballroom'},
    {name:'Terrace'},
    {name:'Dining room'},
    {name:'Stairs'},
    {name:'Billiard room'},
    {name:'Library'},
    {name:'Living room'},
    {name:'Small living room'},
    {name:'Office'},
    {name:'Corridor'},
    {name: 'Medium living room'},
    {name:'Gym'},
    {name:'Cleaning room'},
    {name: 'Warehouse'},
];

// Weapons Array

const weaponsArray = [
    {name: 'Dagger',
    weight: 200,
    },  
   {name: 'Candlestick',
    weight: 800,
    },
    {name: 'Pistol',
    weight: 500,
    },
    {name: 'Club',
    weight: 400,    
    },  
    {name: 'Rope',
    weight: 300,
    },
    {name: 'Wrench',
    weight: 70,
    },
    {name: 'Pen',
    weight: 20,
    },
    {name: 'Shotgun',
    weight: 200,
    },
    {name: 'Poison',
    weight: 70,
    }
];


// ITERATION 2

function selectRandom(array) {

    for(let i = 0; i < array.length; i++){
      return array[Math.floor(Math.random() * array.length)];
     }
        
}


function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray),
    }
}

// ITERATION 3

function revealMystery(object) {
    return `${object.suspect.firstName} ${object.suspect.lastName} killed Mr. Boddy using the ${object.weapon.name} in the ${object.room.name}!`
}
