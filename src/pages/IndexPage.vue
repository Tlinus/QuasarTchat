<template>
  <q-page class=" items-center ">
    <div >
      <accessVue />
    </div>
  </q-page>
</template>

<script lang="ts">
import accessVue from 'src/components/accessVue.vue';

export default ({
  name: 'IndexPage',
  components: {
    accessVue
  }
});
</script>
