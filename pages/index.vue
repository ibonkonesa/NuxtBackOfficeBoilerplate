<template>
  <section class="section">
    <div class="columns is-mobile" >

      <h2>MAIN CONTENT</h2>

    </div>


  </section>
</template>

<script>
    import Card from '~/components/Card'

    export default {
        data() {

            return {
                projects: []
            }
        },
        name: 'HomePage',
        middleware: 'authenticated',
        methods: {},
        components: {
            Card
        }

    }
</script>
