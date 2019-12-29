export default class ServerResponse<T>{
    constructor(
       public code: number,
       public data:T
    ){}
}