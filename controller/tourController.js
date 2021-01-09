const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

//Toure
const getAllTours = (req, res) => {

    res.status(200).json({
        status: 'success',
        requestime:req.requestAt,
        result: tours.length,
        data: {
            tours
        }
    })

}
const createTours = (req, res) => {
res.send('Done');
}
getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => {
        return el.id === id
    })
    res.status(200).json({
        status: "success",
        data: {
            tour
        }

    });

}
const updateTour = (req, res) => {
    res.status(500).json({
        
        message:"this route is not created"
    })
}
module.exports ={
    getAllTours,
    getTour,
    createTours,
    updateTour
}