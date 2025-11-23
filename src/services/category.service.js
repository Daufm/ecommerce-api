const allCategories =[
    { id: '1', name: 'Electronics' },
     { id: '2', name: 'Clothing' },
    { id: '3', name: 'Books' },
    { id: '4', name: 'Home & Kitchen' },
    { id: '5', name: 'Sports & Outdoors' },
]


const getAllCategories = async()=>{
    return Promise.resolve(allCategories);
}



module.exports ={
    getAllCategories,
}