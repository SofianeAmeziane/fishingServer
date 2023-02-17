import mongoose from 'mongoose'
import {Request, Response} from 'express'
const Fish = mongoose.model('Fish');
export const getfishes = async (req: Request, res: Response) => {
  const fishes = await Fish.find({});
    return res.json(fishes);
    }

export const getfisheById = async (req: Request, res: Response) => {
        try {
         const fish = await Fish.findById(req.params.id)
         return res.json(fish);
       } catch (err: any) {
         return res.status(422).send(err.message);
       }
        }