import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

type User ={
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `Usuário ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLocaleLowerCase()
                },
                createdAt() {
                    return faker.date.recent(10)
                },
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },

        routes() {
            this.namespace = 'api' //define todo path com /api sao agora rotas do mirage
            this.timing = 750 //define tempo de delay

            this.get('/users', function (schema, request) {
                const { page =  1, per_page = 10} = request.queryParams

                const total = schema.all('user').length

                const pageStart = (Number(page) - 1) * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    { 'x-total-count': String(total) },
                    { users }
                )
            }) //cria automaticamente a listagem sem precisar fazer controllers para isso
            this.post('/users') //cria automaticamente o create   "     "       "       "         "    "

            this.namespace = '' //volta a aceitar as rotas /api padroes do next depois de telas criadas acima
            this.passthrough() //força toda chamada /api a virem para o mirage primeiro, se nao existirem vao pro padrao do NextJS
        }
    })

    return server;
}