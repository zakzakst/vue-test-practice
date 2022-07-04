import { shallowMount } from '@vue/test-utils';
import VBreadcrumb from '@/components/atoms/VBreadcrumb.vue';

// 項目内容によってタグの種類が反映される
describe('VBreadcrumb.vue', () => {
  it('renders props.items when passed', () => {
    const items = [
      {
        link: '#',
        label: 'Home',
      },
      {
        link: '#',
        label: 'Projects',
      },
      {
        label: 'Page',
      },
    ];
    const wrapper = shallowMount(VBreadcrumb, {
      props: { items },
    });
    expect(wrapper.html()).toContain('<a href="#"');
    expect(wrapper.html()).toContain('<span class="inline-flex');
  });
});