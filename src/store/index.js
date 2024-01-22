import { createStore } from 'vuex';
import authModules from './modules/auth';
import shopModule from './modules/shop';

const store = createStore({
    modules: {
        auth: authModules,
        shop: shopModule
    }
})

export default store;