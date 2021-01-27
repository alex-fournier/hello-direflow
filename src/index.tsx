/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import FooCompo from './direflow-components/foo-compo';
import BarCompo from './direflow-components/bar-compo';

FooCompo.then((element) => {
  console.log('foo-compo is mounted on the DOM', element);
});

BarCompo.then((element) => {
  console.log('bar-compo is mounted on the DOM', element);
});
