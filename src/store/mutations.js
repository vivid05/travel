export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  handleLetterChange (state, l) {
    state.letter = l
  }
}
