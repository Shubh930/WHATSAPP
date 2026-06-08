// const mongoose = require("mongoose");
// const Chat = require("./models/chat.js");

// main()
// .then(() => console.log("connection successful"))
// .catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
// }

// let allChats = [
//     {
//     msg:"hlo",
//     from:"a1",
//     to:"a2",
//     created_at: new Date()
//     },

//     {
//         msg:"hii",
//         from:"b1",
//         to:"b2",
//         created_at: new Date()   
//     },

//     {
//         msg:"how r u ",
//         from:"c1",
//         to:"c2",
//         created_at: new Date()     
//     },

//     {
//         msg:" what is going on ",
//         from:"d1",
//         to:"d2",
//         created_at: new Date()   
//     },

//     {
//         msg:" what r u doing ",
//         from:"d1",
//         to:"d2",
//         created_at: new Date()
//     },

//     {
//         msg:"where do u live",
//         from:"e1",
//         to:"e2",
//         created_at: new Date()
//     }
// ];

// Chat.insertMany(allChats);


const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
app.use(express.static('public'));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  console.log("Connection successful");
}

main().catch((err) => console.log(err));

let allChats = [
  {
    msg: "hlo",
    from: "a1",
    to: "a2",
    created_at: new Date(),
  },
  {
    msg: "hii",
    from: "b1",
    to: "b2",
    created_at: new Date(),
  },
  {
    msg: "how r u ",
    from: "c1",
    to: "c2",
    created_at: new Date(),
  },
  {
    msg: "what is going on",
    from: "d1",
    to: "d2",
    created_at: new Date(),
  },
  {
    msg: "what r u doing",
    from: "e1",
    to: "e2",
    created_at: new Date(),
  },
  {
    msg: "where do u live",
    from: "f1",
    to: "f2",
    created_at: new Date(),
  },
];



let allTalks = [
    {
        msg:"fathers name ?",
        from:"g1",
        to:"g2",
        created_at: new Date()
    },
    
    {
        msg:"mothers name ?",
        from:"h1",
        to:"h2",
        created_at: new Date()
    }
];

async function insertUniqueData(data) {
  for (const record of data) {
    const exists = await Chat.findOne(record);
    if (!exists) {
      await Chat.create(record);
    }
  }
}
insertUniqueData(allChats);
insertUniqueData(allTalks);
console.log("Data inserted successfully without duplicates!");

// (async () => {
//   try {
//     // Check if any documents already exist in the collection
//     const existingChats = await Chat.countDocuments({});
//     if (existingChats === 0) {
//       // Only insert if no documents exist
//       await Chat.insertMany(allTalks);
//       console.log("Data inserted successfully!");
//     } else {
//       console.log("Data already exists. Skipping insertion.");
//     }
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// })();


// (async () => {
//   try {
//     // Check and insert data
//     for (const chat of allChats) {
//       const exists = await Chat.findOne({ msg: chat.msg, from: chat.from, to: chat.to });
//       if (!exists) {
//         await Chat.create(chat);
//       }
//     }

//     for (const talk of allTalks) {
//       const exists = await Chat.findOne({ msg: talk.msg, from: talk.from, to: talk.to });
//       if (!exists) {
//         await Chat.create(talk);
//       }
//     }

//     console.log("Data inserted successfully without duplicates!");
//   } catch (err) {
//     console.error("Error inserting data:", err);
//   }
// })();

