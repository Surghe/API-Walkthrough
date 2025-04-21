import express from 'express';
import { ObjectId } from 'mongodb';
import db from '../db/conn.mjs';

const router = express.Router();

router.route('/:id').get(async(req, res)=>{
    const query = {_id: new ObjectId(req.params.id) };

    // specify collection

    const collection = await db.collection('grades');

    // specify action

    const result = await collection.find(query).toArray();

    // return results
    res.json(result);
});

router.route('/learner/:id').get(async(req, res)=>{
    const collection = await db.collection('grades');
    const result = await collection.find({ learner_id: Number(req.params.id) }).toArray();
    res.json(result);
})
.post(async (req, res)=>{
    const newGrade = req.body;
    const collection = await db.collection('grades');
    const result = await collection.updateOne(query, {
        $push: { scores: req.body },
    });
    res.json(result);
});

router.get('/class/:id', async(req, res)=>{
    const collection = await db.collection('grades');
    const result = await collection.find({ class_id: Number(req.params.id) }).toArray();
    res.json(result);
});



export default router;