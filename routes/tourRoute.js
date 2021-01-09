const express = require('express');

const toureRouter = express.Router();

const {getAllTours,createTours,getTour,updateTour} = require('../controller/tourController')
toureRouter.param((req,res,next,value)=>{
    console.log("Toure route is "+value);
    next();
})
toureRouter.route('/').get(getAllTours).post(createTours);
toureRouter.route('/:id').get(getTour).patch(updateTour);





module.exports =toureRouter;