import { shallowMount } from '@vue/test-utils';
import VButton from '@/components/atoms/VButton.vue';

// ラベル文言が反映される
describe('VButton.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'ボタン文言';
    const wrapper = shallowMount(VButton, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

// disabledが反映される
describe('VButton.vue', () => {
  it('renders props.disabled when passed', () => {
    const wrapper = shallowMount(VButton, {
      props: {
        label: 'ボタン文言',
        disabled: true,
      },
    });
    expect(wrapper.attributes().disabled).toBe('');
  });
});

// colorが反映される
describe('VButton.vue', () => {
  it('renders props.color when passed', () => {
    const color = 'primary';
    const wrapper = shallowMount(VButton, {
      props: {
        label: 'ボタン文言',
        color,
      },
    });
    expect(wrapper.classes()).toContain(`--color-${color}`);
  });
});

// roundedが反映される
describe('VButton.vue', () => {
  it('renders props.rounded when passed', () => {
    const wrapper = shallowMount(VButton, {
      props: {
        label: 'ボタン文言',
        rounded: true,
      },
    });
    expect(wrapper.classes()).toContain('rounded-full');
  });
});

// emit clickが実行される
describe('VButton.vue', () => {
  it('emit click', () => {
    const wrapper = shallowMount(VButton, {
      props: {
        label: 'ボタン文言',
      },
    });
    wrapper.vm.$emit('click');
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
