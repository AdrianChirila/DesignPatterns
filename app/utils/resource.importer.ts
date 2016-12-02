import {ResourceBuilder} from "./resource.builder";
export class ResourceImporter {
    private resourceBuilder: ResourceBuilder;
    constructor(resourceBuilder: ResourceBuilder) {
        this.resourceBuilder = resourceBuilder;
    }
    
    public setBuilder(resourceBuilder: ResourceBuilder) {
        this.resourceBuilder = resourceBuilder;
    }
    
    async buildResource() {
        this.resourceBuilder.set();
        this.resourceBuilder.buildReference();
        await this.resourceBuilder.saveOrUpdate();
    }
}