import { shallowMount } from '@vue/test-utils';
import VAlert from '@/components/atoms/VAlert.vue';

// slot内容が反映される
describe('VAlert.vue', () => {
  it('renders slot', () => {
    const slotDefault = '<div id="one">One</div>';
    const wrapper = shallowMount(VAlert, {
      props: {
        show: true,
      },
      slots: {
        default: slotDefault,
      },
    });
    expect(wrapper.html()).toContain(slotDefault);
    expect(wrapper.find('#one').exists()).toBe(true);
  });
});

// dismissibleが反映される
describe('VAlert.vue', () => {
  it('renders props.dismissible when passed', () => {
    const wrapper = shallowMount(VAlert, {
      props: {
        show: true,
        dismissible: true,
      },
    });
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

// colorが反映される
describe('VAlert.vue', () => {
  it('renders props.color when passed', () => {
    const color = 'primary';
    const wrapper = shallowMount(VAlert, {
      props: {
        show: true,
        color,
      },
    });
    expect(wrapper.find(`.--color-${color}`).exists()).toBe(true);
  });
});
