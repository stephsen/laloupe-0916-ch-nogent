import mongoose from 'mongoose';

const btn1Schema = new mongoose.Schema({
    title1: String,
    title2: String,
    title3: String,
    texte1: String,
    texte2: String,
    texte3: String
});

let model = mongoose.model('Btn1', btn1Schema);

export default class Btn1 {

    findAll(req, res) {
        model.find({}, (err, btn1s) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(btn1s);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, btn1) => {
            if (err || !btn1) {
                res.sendStatus(403);
            } else {
                res.json(btn1);
            }
        });
    }

    create(req, res) {
        model.create({
                title1: req.body.title1,
                title2: req.body.title2,
                title3: req.body.title3,
                texte1: req.body.texte1,
                texte2: req.body.texte2,
                texte3: req.body.texte3
            },
            (err, btn1) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(btn1);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, req.body, (err, btn1) => {
            if (err || !btn1) {
                res.status(500).send(err.message);
            } else {
                res.json(btn1);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}