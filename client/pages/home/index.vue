<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-s-12">
                Homepage!!!!!!!!

                <ul>
                    <li v-for="todo in todos">
                        {{ todo.text }}
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
    preFetch: getTodos,
    beforeMount() {
        getTodos(this.$store)
    }
}

</script>

<style lang="stylus">
.container
    background-color: #a3a3a3
</style>
