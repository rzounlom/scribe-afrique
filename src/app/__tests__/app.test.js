import App from '../containers/app';
import { shallow } from 'enzyme';
import { findByDataAttr } from '../../test/testUtils';

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByDataAttr(wrapper, 'component-app');
  expect(component.exists()).toBe(true);
});
