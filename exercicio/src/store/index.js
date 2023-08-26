import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            message: 'Olá, mundo!'
        }
    }
})

export default store