<template>
	<div>
	  <ul class="list">
	    <li
	      class="item"
	      v-for="item of letters"
	      :key="item"
	      :ref="item"
	      @touchstart.prevent="handleTouchStart"
	      @touchmove="handleTouchMove"
	      @touchend="handleTouchEnd"
	      @click="handleLetterClick"
	    >
	      {{item}}
	    </li>
	  </ul>
	  <div class='title' v-if="flag">{{ alphabet }}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
      alphabet:'',
      flag:false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$store.commit('handleLetterChange',e.target.innerText)
      //this.$emit('change', e.target.innerText)
      this.alphabet=e.target.innerText
      this.flag=true
      setTimeout(()=>{
      	this.flag=false
      },500)
    },
    handleTouchStart () {
      this.touchStatus = true     
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$store.commit('handleLetterChange',this.letters[index])
            //this.$emit('change', this.letters[index])
            this.flag=true
            this.alphabet=this.letters[index]
          }
        }, 16)
        
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
      setTimeout(()=>{
      	this.flag=false
      },500)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
  .title
  	position: absolute
  	top: 0
  	bottom: 0
  	left: 0
  	right: 0
  	margin: auto
  	width: 2rem
  	height: 2rem
  	line-height: 2rem
  	background: #eee
  	border-radius: 50%
  	opacity: 0.8
  	text-align: center
  	font-size: 1rem
</style>
