import { Entity, Schema } from 'redis-om'

class Post  extends Entity {}
export const postSchema = new Schema(Post, {
    title: { type: 'string', sortable: true },
    subtitle: { type: 'string'},
    content: { type: 'text'},
    author_id: { type: 'string'},
    author_name: { type: 'string', sortable: true},
    created_at: { type: 'date', sortable: true },
    updated_at: { type: 'date', sortable: true },
})