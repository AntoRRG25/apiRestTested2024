import pag from '../src/services/project.js'
import * as store from './helperTest/testStore.js'
import * as help from './helperTest/helpPages(03).js'
import {Page, Item} from '../src/db.js'

/*Tests de las funciones correspondientes a Page e Item, tablas relacionadas 
en las que se presenta el producto*/

describe('Funciones de Service/ product. CRUD basico completo de ambas tablas.', ()=>{
     afterAll(()=>{
        console.log('Finalizando todas las pruebas...')
    })
    describe('Funciones "createHome" y "addNewItem" de creacion de pagina e items', ()=>{
        it('Deberia crear una pagina web con items,', async()=>{
            const {title, landing, logo, info_header, info_body, url, items}= help.bodyPage;
            const response = await pag.createHome(title, landing, logo, info_header, info_body, url, items)
            expect(response).toMatchObject(help.responsePage)  
        })
        it('Deberia arrojar un error al intentar crear otra pagina con el mismo titulo', async()=>{
            const {title, landing, logo, info_header, info_body, url, items} = help.bodyPage;
            try {
               await pag.createHome(title, landing, logo, info_header, info_body, url, items)
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('This title already exists');
                expect(error.status).toBe(400);
            }
        })
        it('Deberia crear un Item', async()=>{
            const id = 1; //El id de page para relacionar
            const img = "url";
            const text = "Texto de prueba"
            const newItem = await pag.addNewItem(img, text, id)
            expect(newItem).toBe("Item creado exitosamente")
        })
    })
    describe('Funciones "getHome", "getById" y "getDetail" busqueda de pages, page e item.', ()=>{
        describe('Funcion "getHome"', ()=>{
            it('Deberia retornar un arreglo con las paginas', async()=>{
                const response = await pag.getHome()
                expect(response.pages).toEqual(help.resGetPage)
            })
        })
        describe('Funcion "getById"', ()=>{
            it('Deberia retornar un objeto con una pagina conteniendo arreglo con los items', async()=>{
                const id = 1
                const response = await pag.getById(id)
                expect(response).toMatchObject(help.resDetailPage)
            })
        })
        describe('Funcion "getDetail" ', ()=>{
            it('Deberia retornar un objeto con un item', async()=>{
                const id = 4
                const response = await pag.getDetail(id)
                expect(response).toEqual(help.responseItem)
            })
        })
    })
    describe('Funciones de actualizacion "updHome" y "updItem".', ()=>{
        describe('Funcion updHome.', ()=>{
            it('Deberia actualizar total o parcialmente "page".', async()=>{
                const id= 1
                const body = help.bodyUpd
                const response = await pag.updHome(id, body)
                expect(response).toMatchObject(help.bodyUpdResponse)
            })
        })
        describe('Funcion updItem', ()=>{
            it('Deberia actualizar total o parcialmente "item".', async()=>{
                const id= 1
                const body = help.itemUpdate
                const response = await pag.updItem(id, body)
                expect(response).toMatchObject(help.responseItemUpdate)
            }) 
        })
    })
    describe('Funcion de borrado "delHome".', ()=>{
        it('Deberia borrar a page y todos sus items asociados (borrado fisico)', async()=>{
            const id = 1
            const response = await pag.delHome(id)
            console.log(response)
            expect(response).toEqual({ message: 'Page and associated items deleted successfully' })
        })
    })
})
