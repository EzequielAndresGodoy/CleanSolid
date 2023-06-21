import { PhotosService, PostService, TodoService } from "./02-open-close-b";
import { HttpsClient } from "./03-open-close-c";

(async () => {
    const httpsClient = new HttpsClient();

    const todoService = new TodoService(httpsClient);
    const postService = new PostService(httpsClient);
    const photosService = new PhotosService(httpsClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();

    console.log({ todos, posts, photos });
})();
