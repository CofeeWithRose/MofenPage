export default class WebError extends Error{

    constructor(
        public readonly cod: string, 
        public readonly message:string,
    ){
        super(message);
    }
}