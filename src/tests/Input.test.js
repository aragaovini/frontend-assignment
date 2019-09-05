import { mount } from '@vue/test-utils'
import Input from '../components/Input.vue'

describe('Input', () => {
    it('renders correctly', () => {
  
      const wrapper = mount(Input)
      expect(wrapper).toMatchSnapshot()
    })

    it('is showing error class', () => {
  
        const wrapper = mount(Input, {
            propsData: {
                currency: true
            }
        })
        wrapper.setData({
            errorMessage: 'Required field.'
        })
        expect(wrapper.find('.error-input').exists()).toBeTruthy()
      })

      it('is showing right label', () => {
  
        const wrapper = mount(Input, {
            propsData: {
                label: 'Company'
            }
        })
        expect(wrapper.find('label').text()).toBe('Company')
      })

      it('is blurring', () => {
  
        const wrapper = mount(Input, {
            propsData: {
                currency: true
            }
        })

        wrapper.setData({
            model: '300'
        })

        wrapper.find('input').trigger('blur')
        expect(wrapper.emitted('onBeforeMask')).toBeTruthy()
      })
 
      it('is emitting the value without mask', () => {
  
        const wrapper = mount(Input, {
            propsData: {
                currency: true
            }
        })

        wrapper.setData({
            model: '300'
        })

        wrapper.find('input').trigger('blur')
        expect(wrapper.emitted('onBeforeMask')[0][0]).toBe('300')
      })

      it('is emitting the value with mask', () => {
  
        const wrapper = mount(Input, {
            propsData: {
                currency: true
            }
        })

        wrapper.setData({
            model: '300'
        })
        
        wrapper.find('input').trigger('blur')
        expect(wrapper.emitted('input')[0][0]).toBe('$300.00')
      })
  })