const mongoose = require('mongoose');

export abstract class ResourceBuilder {
    protected document: any;
    protected model: any;

    public async saveOrUpdate() {
        let dbResource = await this.model.findOne({identifier: this.document.identifier});
        if (dbResource) {
            console.log(`Resource with identifier ${this.document.identifier} already exist in db, update it...`);
            dbResource = await this.model.findOneAndUpdate({identifier: this.document.identifier}, this.document);
            console.log('Resource has been updated!');
            return dbResource
        }
        console.log(`Resource with identifier ${this.document.identifier} does not exist in db, save it`);
        dbResource = await this.model(this.document).save();
        return dbResource;
    }

    public abstract set();
    public abstract buildReference();
}