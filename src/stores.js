import { writable } from 'svelte/store'

export const users = createStore('users')
export const todos = createStore('todos')
export const posts = createStore('posts')
export const comments = createStore('comments')
export const albums = createStore('albums')
export const photos = createStore('photos')




function createStore(path) {
    const { subscribe, set } = writable([]);
    let hydrated = false

    function hydrate() {
        hydrated = true
        fetch('https://jsonplaceholder.typicode.com/' + path)
            .then(response => response.json())
            .then(json => set(json))
    }

    return {
        subscribe(...params) {
            if (!hydrated) hydrate()
            return subscribe.apply(this, params)
        },
    }
}