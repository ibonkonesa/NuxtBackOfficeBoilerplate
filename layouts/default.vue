<template>
  <div>
    <b-navbar
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="~assets/buefy.png" alt="Buefy" height="28"/>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a @click="logout" class="button is-light">
              Log out
            </a>
          </div>
        </b-navbar-item>
      </template>

    </b-navbar>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon"/>
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt/>
      </div>
    </section>
  </div>
</template>

<script>
    const Cookie = process.client ? require('js-cookie') : undefined;

    export default {
        data() {
            return {
                items: [
                    {
                        title: 'Home',
                        icon: 'home',
                        to: {name: 'index'}
                    },
                ]
            }
        },

        methods: {
            logout() {
                Cookie.remove('auth');
                this.$store.commit('auth/setAuth', null);
                this.$router.push('/login');
            }
        }
    }
</script>
