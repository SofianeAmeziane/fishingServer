import mongoose from 'mongoose'
import {Request, Response} from 'express'
const Lure = mongoose.model('Lure');
export const getlures = async (req: Request, res: Response) => {
 const lures = await Lure.find({});
 return res.json(lures);
    }

export const getlureById = async (req: Request, res: Response) => {
      try {
       const lure = await Lure.findById(req.params.id)
       return res.json(lure);
     } catch (err: any) {
       return res.status(422).send(err.message);
     }
      }
