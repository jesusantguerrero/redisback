import { Router } from "express";
import { useDB } from "../lib/redis";
import { PostRepository } from "../repositories/postRepository";

const router = Router();

router.get('/', async (req, res) => {
    const client = await useDB();
    const Posts = new PostRepository(client)

    return res.json(await Posts.list());
})

export const postRouter = router