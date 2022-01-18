import { createServer, Factory, Model } from 'miragejs'
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
            server.createList('user', 10)
        },

        routes() {
            this.namespace = 'api' //define todo path com /api sao agora rotas do mirage
            this.timing = 750 //define tempo de delay

            this.get('/users') //cria automaticamente a listagem sem precisar fazer controllers para isso
            this.post('/users') //cria automaticamente o create   "     "       "       "         "    "

            this.namespace = '' //volta a aceitar as rotas /api padroes do next depois de telas criadas acima
            this.passthrough() //força toda chamada /api a virem para o mirage primeiro, se nao existirem vao pro padrao do NextJS
        }
    })

    return server;
}