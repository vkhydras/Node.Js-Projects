exports.createPostValidator = (req,res,next)=> {
    req.check('title','Write a title').noEmpty
    req.check('title',"Title must be between 4-150 characters").isLengt({
        min:4,max:150
    })
    req.check('body','Write a body').noEmpty
    req.check('body',"Body must be between 4-2000 characters").isLengt({
        min:4,max:2000
    })

    const errors = req.validationError()
    if(errors){
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    
}