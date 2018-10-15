<template lang="html">
  <section>
      <div class="page__container">
        <appServiceQuote></appServiceQuote>
        <appServices></appServices>
        <appTimeline></appTimeline>
        <appTestimonials></appTestimonials>
        <appContact></appContact>
      </div>
    </section>
</template>

<script>
import ServiceQuote from './ServiceQuote'
import Header from './Header'
import Services from './Services'
import Timeline from './Timeline'
import Testimonials from './Testimonials'
import Contact from './Form'

export default {
  components: {
    appServiceQuote: ServiceQuote,
    appHeader: Header,
    appServices: Services,
    appTimeline: Timeline,
    appTestimonials: Testimonials,
    appContact: Contact
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
