export class Video {
    id?: string;
    url: string;
    description?: string;

    constructor(url:string, description?:string, id?:string){
        this.id = id;
        this.url = url;
        this.description = description;
    }
}