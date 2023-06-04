<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Chat
        </q-toolbar-title>

        <q-btn 
        color="negative"
        >
          <q-icon name="logout" />
        </q-btn>
          
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
</script>


<style lang="scss" scoped>
</style>