import { Module, Type, Provider } from '@nestjs/common'
import * as requireContext from  'require-context'
import * as path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm';


function importAll<T>(fileName: string): T[]{
    const context = requireContext(path.resolve(__dirname, './'), true,new RegExp(`/${fileName}.js$`), 'sync')
    return context.keys().map( k => {
        const module = context(k)
        return module&&module.default
    }).filter(val => val)
}
@Module({  
    imports:[TypeOrmModule.forRoot(),...importAll<Type<any>>('module')],
})
export default class AppModule{}