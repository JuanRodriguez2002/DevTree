import User from "../models/User";
import { Request, Response } from "express";
import slugify from 'slugify';
import { hashPassword } from "../utils/auth";

export const createAccount = async (req : Request, res: Response)=>{
    
    const { email, password } = req.body

    const userExists = await User.findOne({email})

    if (userExists) {
        const error = new Error('un usuario con ese Email ya esta registrado')
        return res.status(409).json({error : error.message})
    }
    
    const handle = slugify(req.body.handle, '')
    const handleExist = await User.findOne({handle})

    if (handleExist) {
        const error = new Error('Nombre de Usuario no disponible')
        return res.status(409).json({error : error.message})
    }
    const user = new User(req.body)
    user.password = await hashPassword(password);
    user.handle = handle;

    await user.save();
    
    res.send('Registro Creado Correctamente')
}