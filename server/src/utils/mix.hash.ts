import {SHA256 } from 'crypto-js'
export function mixHash(str: string){
    if(str){
        let newStr = '';
        for(let i = str.length-1; i>=0; i--){
          newStr = `${newStr}${str[i]}`
        }
        return SHA256(newStr).toString()
    }
    return str
}

let a = '12634'
console.log('mix: ',mixHash(a))