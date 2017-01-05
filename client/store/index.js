import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todos: {}
    },

    actions: {
        getTodos: ({ commit }) => {
            // do API call to get the todos
            const todos = [
                { id: 1, text: 'Go get some groceries' , done: false },
                { id: 2, text: 'Go make some money' , done: false }
            ]
            commit('SET_TODOS', todos)
        },
        finaliseTodo: ({ commit }, index) => {
            return new Promise((resolve, reject) => {
                commit('DELETE_TODO', index)
                resolve()
            })
        }
    },

    mutations: {
        SET_TODOS: (state, todos) => {
            state.todos = todos
        },
        DELETE_TODO: (state, index) => {
            state.todos.splice(index, 1)
        }
    }
})

export default store
