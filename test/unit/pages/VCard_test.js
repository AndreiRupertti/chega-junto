import Vue from 'vue'
import VCard from '@/components/VCard.vue'

describe('VCard.vue', () => {

  it('deve ter o data() correto', () => {
    const Contructor = Vue.extend(VCard)
    const vm = new Contructor().$mount()
    expect(typeof vm.$el.data).to.equal('function')
    // expect(typeof VCard.data).to.equal('function')
  })
})
