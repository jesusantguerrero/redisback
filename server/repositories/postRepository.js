import { Repository } from 'redis-om'
import { postSchema } from '../modules/Post'


export class PostRepository {
    constructor(client) {
        this.repo = client.fetchRepository(postSchema)
    }

    create(data) {
        return this.repo.createEntity(data)
    }

    list() {
        return await this.repo.search().return.all()
    }
}