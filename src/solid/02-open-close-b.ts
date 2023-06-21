// import axios from "axios";

import { HttpsClient } from "./03-open-close-c";

export class TodoService {
    constructor(private http: HttpsClient) {}

    async getTodoItems() {
        const { data } = await this.http.get(
            "https://jsonplaceholder.typicode.com/todos/"
        );
        return data;
    }
}

export class PostService {
    constructor(private http: HttpsClient) {}

    async getPosts() {
        const { data } = await this.http.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
    }
}

export class PhotosService {
    constructor(private http: HttpsClient) {}

    async getPhotos() {
        const { data } = await this.http.get(
            "https://jsonplaceholder.typicode.com/photos"
        );
        return data;
    }
}
