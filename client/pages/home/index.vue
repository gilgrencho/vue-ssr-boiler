<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-s-12">
                Homepage!!!!!!!!

                <h1>A great list of todo's</h1>
                <ul>
                    <li v-for="(todo, index) in todos">
                        <span>{{ todo.text }}</span>
                        <button @click="finaliseTodo(index)">Done</button>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>

function getTodos(store) {
    store.dispatch('getTodos')
}

export default {
    name: 'home-index',
    computed: {
        todos() { return this.$store.state.todos }
    },
    methods: {
        finaliseTodo(i) {
            this.$store.dispatch('finaliseTodo', i)
        }
    },
    preFetch: getTodos,
    beforeMount() {
        getTodos(this.$store)
    }
}

</script>

<style lang="stylus">
.container
    padding: 20px
</style>
