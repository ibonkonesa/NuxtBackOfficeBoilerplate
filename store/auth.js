const cookieparser = process.server ? require('cookieparser') : undefined;
const Cookie = process.client ? require('js-cookie') : undefined;

export const state = () => ({
  auth: null
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  }
};

export const actions = {
  init({commit}, {req}) {
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);

      try {
        let token = parsed.auth;
        if (token) {
          commit('setAuth', token);
        }

      } catch (err) {

      }
    }
  },

  async logIn({commit}, {username, password}) {


    try {

      let response = await this.$axios.$post('/login', {username: username, password: password});
      commit('setAuth', response.session);
      Cookie.set('auth', response.session);
      return Promise.resolve();


    } catch (e) {
      return Promise.reject();
    }

  }
};
