const Cookie = process.client ? require('js-cookie') : undefined;

export default function ({$axios, redirect, store}) {

  $axios.onRequest(request => {
    const token = store.state.auth.auth;
    if (token) {
      request.headers.common['token'] = token;
    }
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      Cookie.remove('auth');
      store.commit('auth/setAuth', null);
      redirect('/login')
    }
  })
}
