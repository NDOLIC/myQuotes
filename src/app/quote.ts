export class Quote {
    public showDescription:boolean;
    constructor(public quoti:string, public author:string, public publisher:string, public upvote:number, public downvote:number, public id:number, public postDate:Date){
        this.showDescription=false
    }
}

