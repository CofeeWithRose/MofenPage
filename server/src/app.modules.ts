import { Module, Type, Provider } from '@nestjs/common'
import UserModule from './user/module';

// function importAll<T>(fileName: string): T[]{
//     const context = require.context('./', true,new RegExp(`/${fileName}.ts$`), 'sync')
//     return context.keys().map( k => {
//         const module = context(k)
//         return module&&module.default
//     }).filter(val => val)
// }

// @Module({  
//     imports:[...importAll<Type<any>>('module')],
// })
@Module({
    imports:[UserModule]
})
export default class AppModule{}