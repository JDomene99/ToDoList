import express from "express";
import Task from '../models/taskModel.js';


export const getTasks = async (req, res) =>{
    const data = await Task.find({});
    res.send(data)
    }

export const getTask = async (req, res) =>{
    const post = await Task.findById({ _id: req.params.id });
    res.json(post);
    
    
}

export const getTaskByName = async (req, res) =>{
   
    const post = await Task.findOne({'title' : req.params.name});
    res.json(post);
   
}

export const createTask = async (req, res) =>{
   const {body} = req;
   const data = await Task.create(body);
   res.send({data})
    
}

export const updateTask = async (req, res) =>{
    const post = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json(post);
}

export const deleteTask =async (req, res) =>{
    const post = await Task.deleteOne({ _id: req.params.id });
    res.json(post);
   
}

