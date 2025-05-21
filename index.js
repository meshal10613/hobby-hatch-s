require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const port = process.env.port || 3000;
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@meshal10613.mbbtx0s.mongodb.net/?retryWrites=true&w=majority&appName=meshal10613`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get("/", (req, res) => {
    res.send("Server is running......");
});


async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const usersCollection = client.db("a10-hobby-hatch").collection("users");
        const hobbiesCollection = client.db("a10-hobby-hatch").collection("hobbies");

        //usersCollection
        app.get("/user", async(req, res) => {
            const result = await usersCollection.find().toArray();
            res.send(result);
        });

        app.get("/user/:id", async(req, res) =>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        app.post("/user", async(req, res) => {
            const data = req.body;
            const result = await usersCollection.insertOne(data);
            res.send(result);
        });

        app.patch("/user", async(req, res) => {
            const {email, lastSignInTime} = req.body;
            const filter = {email: email};
            const updatedDoc = {
                $set: {
                    lastSignInTime: lastSignInTime
                }
            };
            const result = await usersCollection.updateOne(filter, updatedDoc);
            res.send(result);
        });

        //hobbiesCollection
        app.get("/hobbies", async(req, res) => {
            const {emailParams} = req.query;
            let query = {};
            if(emailParams){
                query = {
                    email: {
                        $regex:emailParams,
                        $options: "i",
                    }
                }
            }
            const result = await hobbiesCollection.find(query).toArray();
            res.send(result);
        });

        app.get("/hobbies/:id", async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await hobbiesCollection.findOne(query);
            res.send(result);
        });

        app.post("/hobbies", async(req, res) => {
            const data = req.body;
            const result = await hobbiesCollection.insertOne(data);
            res.send(result);
        });

        app.put("/hobbies/:id", async(req, res) => {
            const id = req.params.id;
            const updatedHobby = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: updatedHobby
            };
            const options = {upsert: true};
            const result = await hobbiesCollection.updateOne(filter, updatedDoc, options);
            res.send(result);
        })

        app.delete("/hobbies/:id", async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await hobbiesCollection.deleteOne(query);
            res.send(result);
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});