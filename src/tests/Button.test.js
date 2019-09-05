import { mount } from '@vue/test-utils'
import Button from '../components/Button.vue'

describe('render button', () => {
    it('primary', () => {
  
      const wrapper = mount(Button, {
          slots: {
              default: 'testing button'
          }
      })
      expect(wrapper.text()).toBe('testing button')
    })
  })