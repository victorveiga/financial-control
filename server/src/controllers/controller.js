class View {
    constructor(schema){
        this.Schema = schema
    }

    /** load all records */
    async store(req, res){
        try {
            const result = await this.Schema.find()
            return res.status(200).send(result) 
        } catch (error) {
            return res.status(404).send({'error': error.message})
        }    
    }
    
    //** create the record */
    async create(req, res){
        try {
            const result = await this.Schema.create(req.body)
            return res.status(201).send(result)
        } catch(error) {
            return res.status(400).send({'error': error.message})
        }
    }

    //** Load record with a specific id */
    async read(req, res){
        try {
            const result = await this.Schema.find({_id: req.params.id})
            return res.status(200).send(result)
        } catch (error) {
            return res.status(400).send({'error': error.message})
        } 
    }

    //** Update record with a specific id */
    async update(req, res){
        try {
            const result = await this.Schema.updateOne({_id: req.params.id}, req.body)
            return res.status(200).send(result)
        } catch (error) {
            return res.status(400).send({'error': error.message})
        }        
    }

    //** Remove a record */
    async delete(req, res){
        try {
            const result = await this.Schema.deleteOne({_id: req.params.id})
            return res.status(200).send(result)
        } catch (error) {
            return res.status(404).send({'error': error.message})
        }
    }

}

module.exports = View