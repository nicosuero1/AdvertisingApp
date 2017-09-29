export class Advertising {
    id?: string;
    title: string;
    content: string;
    imgUrl: string

    constructor(title:string, content:string, imgUrl:string, id?:string){
        this.id = id;
        this.title = title;
        this.content = content;
        this.imgUrl = imgUrl;
    }
}