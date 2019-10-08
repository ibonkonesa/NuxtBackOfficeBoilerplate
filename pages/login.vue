<template>
  <section class="hero  is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <div class="field">
              <div class="control">
                <input v-model="form.username" class="input is-large" type="text" placeholder="User"
                       autocomplete="false">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input v-model="form.password" class="input is-large" type="password" placeholder="Your Password"
                       autocomplete="false">
              </div>
            </div>

            <b-button class="button is-block is-info is-large is-fullwidth" :disabled="!isFormValid"
                      :loading="isAuthenticating"
                      @click="postLogin">Login
            </b-button>

            <br>

            <h4 class="has-text-danger" v-if="isError">An error has occurred</h4>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: 'test',
                    password: 'test'
                },
                isAuthenticating: false,
                isError: false
            }
        },
        computed: {
            isFormValid() {
                return this.form.username.length > 0 && this.form.password.length > 0
            }
        },
        middleware: 'notAuthenticated',
        layout: 'blank',
        methods: {
            async postLogin() {

                this.isAuthenticating = true;
                this.isError = false;

                try {
                    await this.$store.dispatch('auth/logIn', this.form);
                    this.$router.push('/');

                } catch (e) {
                    console.log(e);

                    this.isError = true;
                } finally {
                    this.isAuthenticating = false;
                }

            }
        }
    }
</script>
