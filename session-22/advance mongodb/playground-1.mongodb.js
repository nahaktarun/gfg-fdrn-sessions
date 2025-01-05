/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'advanceMongo';

// Create a new database.
use(database);

// Create a new collection.
//.createCollection(collection);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
// reference table -> foriegn field
db.products.insertOne({
    _id: ObjectId(),
    name: "Cloths",
    price: 99.99,
    stock: 50
});
// db.products.find({});


// local table -> local field
// orders -> customer_id,date, items[]
db.orders.insertOne({
    customer_id: "ABC123",
    order_date: new Date(),
    items: [{
        product_id: ObjectId("67794ad9f9acc597d97b67ae"),
        product_name: "Shoes",
        quantity: 2,
        price: 99.99
    },
    {
        product_id: ObjectId("67794ad9f9acc597d97b67ae"),
        product_name: "Cloths",
        quantity: 2,
        price: 99.99
    }
]
})

// db.orders.find({})
// we want to get order with the product details
// db.orders.aggregate(
//     [{
//         $lookup: {
//           from: "products",
//           localField: "items.product_id",
//           foreignField: "_id",
//           as: "product_details"
//         }
//     },
// ]
// );

// db.orders.aggregate([
//     {
//       $lookup: {
//         from: "products",
//         localField: "items.product_id", // Nested field in the orders collection
//         foreignField: "_id", // Field in the products collection
//         as: "products_details"
//       }
//     }
//   ])
// db.orders.find({})
// db.products.find({})
// db.orders.aggregate([
//     {$unwind: "$items"}
// ])