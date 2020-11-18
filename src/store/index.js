import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main/main.store';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
  },
});

