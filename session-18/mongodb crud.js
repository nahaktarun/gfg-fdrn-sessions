// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("myEcommerceDB");

// db.users.insertOne({
//     name: 'Alice',
//     email: "alice@gamil.com",
//     city: "New york",
//     createdAt: new Date()
// })

// get all the records/documents/object from the collection

// insert multiple records
// db.users.insertMany([{
//     name: 'ALex',
//     email: "alex@gamil.com",
//     city: "New Jersey",
//     createdAt: new Date()
// },
// {
//     name: 'Peter',
//     email: "peter@gamil.com",
//     city: "Tokyo",
//     createdAt: new Date()
// },
// {
//     name: 'Tom',
//     email: "Tom@gamil.com",
//     city: "New york",
//     createdAt: new Date()
// },
// {
//     name: 'June',
//     email: "June@gamil.com",
//     city: "Berlin",
//     createdAt: new Date()
// }])

// get all the objects.
// db.users.find({});

// get a object with a specific object id
// db.users.findOne({_id: ObjectId("67716408776dc9769f0321e0")});
// db.users.find({name: "Alice"}) // with a property.

// wildcard attributes
// db.users.updateOne({email: "tarun@gmail.com"}, {$set: {name: "Tarun"}});

// deleting a record or object from collection
// db.users.deleteOne({name: "Tarun"});

db.users.find({});
