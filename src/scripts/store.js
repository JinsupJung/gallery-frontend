import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            account: {
                id: 0
            }
        }
    },
    mutations: {
        setAccount(state, payload) {   //payload에 백엔드에서 id값이 온다
            state.account.id = payload;
        }
    }
})

export default store;