export const state = () => ({});

export const mutations = {};

export const actions = {
  nuxtServerInit({dispatch}, {req}) {
        dispatch('auth/init', {req})
  }
};
