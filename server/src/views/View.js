class View {
    constructor(schema){
        this.Schema = schema
    }

    /** load all records */
    async store(req, res){
        const result = await this.Schema.find()

        if (result)
            return res.status(200).send(result)

        return res.status(404).send('No Records Found')      
    }
    
    //** create the record */
    async create(req, res){
        const result = await this.Schema.create(req.body)
    
        if (result)
            return res.status(201).send(result)

        return res.status(400).send('Save Failed') 
    }

    //** Load record with a specific id */
    async read(req, res){
        const result = await this.Schema.find({_id: req.params.id})

        if (result)
            return res.status(200).send(result)

        return res.status(404).send('Record Not Found')  
    }

    //** Update record with a specific id */
    async update(req, res){
        const result = await this.Schema.updateOne({_id: req.params.id}, req.body)

        if (result)
            return res.status(200).send(result)

        return res.status(404).send('Record Not Found')          
    }

    //** Remove a record */
    async delete(req, res){
        const result = await this.Schema.deleteOne({_id: req.params.id})

        if (result)
            return res.status(200).send(result)

        return res.status(404).send('Record Not Found')  
    }

}

module.exports = View