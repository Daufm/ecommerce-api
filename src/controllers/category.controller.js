const CategoryService = require('../services/category.service');


const getAllCategories = async (req ,res)=>{
    try{
        const categories = await CategoryService.getAllCategories();
      
        if(!categories || categories.length ===0){
            return res.status(404).json({message: 'No categories found'});
        }

        res.status(200).json(categories);
    }catch(error){
        res.status(500).json({message: 'Server error'});
    }
}

module.exports={
    getAllCategories,
}