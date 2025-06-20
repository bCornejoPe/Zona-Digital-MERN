
import salesModel from "../models/sales.js"



const salesController = {}

salesController.salesByCategory = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [{
                $group: {
                    _id: "$catgeory",
                    totalVentas: {$sum: "$total"}
                }
            },
        {
            $sort: {totalVentas: -1}
        }]
        )

        res.status(200).json(result)
    } catch (error) {
        console.log8("error"+error)
        res.status(500).json({message: "Internal error server "})
    }    
}

salesController.bestSellingProducts = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [{
                $group: {
                    _id: "$product",
                    cantidad: {$sum: 1}
                }
            },
        {
            $sort: {cantidad: -1}
        },
    {
        $limit: 5
    }]
        )

        res.status(200).json(result)
    } catch (error) {
        console.log8("error"+error)
        res.status(500).json({message: "Internal error server "})
    }    
}



salesController.frecuentCustomers = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [{
                $group: {
                    _id: "$customers",
                    compras: {$sum: 1}
                }
            },
        {
            $sort: {compras: -1}
        },
    {
        $limit: 3
    }]
        )

        res.status(200).json(result)
    } catch (error) {
        console.log8("error"+error)
        res.status(500).json({message: "Internal error server "})
    }    
}
salesController.totalEarnings = async (req, res) => {
    try {
        const result = await salesModel.aggregate(
            [{
                $group: {
                    _id: null,
                    gananciasTotales: {$sum: "total"}
                }
            
       
            }])
            res.status(200).json(result)
    } catch (error) {
        console.log8("error"+error)
        res.status(500).json({message: "Internal error server "})
    }    
}

salesController.insertSales = async (req, res) => {
    try{
        //const { product, category, customers, total, date} = req.body
        const newSales = new salesModel(req.body)
        await newSales.save()

        res.status(200).json({message: "sale saved"})
    }
    
catch (error) {
    console.log8("error"+error)
    res.status(500).json({message: "Internal error server "})
}    
}


export default salesController;