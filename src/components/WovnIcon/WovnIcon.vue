<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-icon"
    :class="className"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
    :fill="fill"
    v-on:mouseover="onMouseHover"
    v-on:mouseout="onMouseOut"
  >
    <use v-bind:xlink:href="href"></use>
  </svg>
</template>

<script>
export default {
  name: 'WovnIcon',

  data: function () {
    return {
      fill: '',
      hoverFill: ''
    }
  },

  props: {
    className: {
      type: String
    },

    name: {
      type: String,
      required: true
    },

    width: {
      type: [Number, String],
      default: 24
    },

    height: {
      type: [Number, String],
      default: 24
    },

    color: {
      type: String,
      default: '#000000 #000000'
    }
  },

  computed: {
    href () {
      return `#${this.name}`;
    }
  },

  methods: {
    onMouseHover () {
      this.fill = this.color.split(' ')[1] ? this.color.split(' ')[1] : this.fill
    },

    onMouseOut () {
      this.fill = this.color.split(' ')[0]
    }
  },

  mounted () {
    this.fill = this.color.split(' ')[0]
    this.hoverFill = this.color.split(' ')[1] ? this.color.split(' ')[1] : this.fill
  }
}
</script>
