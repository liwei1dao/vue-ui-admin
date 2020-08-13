<template>
  <v-card 
    v-bind="$attrs"
    :class="classes"
    raised
  >

    <slot />
    <template v-if="$slots.actions">
      <v-divider class="mt-2" />
      <v-card-actions class="pb-0">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<script>
export default {
  name:"MCard"
}
</script>

<style>

</style>