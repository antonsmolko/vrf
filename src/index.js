import RfCheckbox from './components/templates/checkbox';

import RfInput from './components/templates/input';

import RfTextarea from './components/templates/textarea';

import RfSelect from './components/templates/select';

import RfDatepicker from './components/templates/datepicker';

import RfResource from './components/templates/resource';

import RfForm from './components/templates/form';

import RfSubmit from './components/templates/submit';

import RfNested from './components/templates/nested';

import RfPartial from './components/templates/partial';

import RfSpan from './components/templates/span';

import RfBitwise from './components/templates/bitwise';

import RfAction from './components/templates/action';

import RfActionResult from './components/templates/action-result';

import RfFile from './components/templates/file'

import RfRadioGroup from './components/templates/radio-group'

import RfRadio from './components/templates/radio'

import RfRequire from './components/templates/require'

import RfScope from './components/templates/scope'

import descriptors from './components/descriptors';

import mutations from './vuex/mutations';

import AutocompleteProvider from './abstract/autocomplete-provider';

import Resource from './mixins/resource';

import installer from './installer';


const components = {
  RfCheckbox,
  RfSwitch: RfCheckbox,
  RfInput,
  RfTextarea,
  RfSelect,
  RfDatepicker,
  RfResource,
  RfForm,
  RfSubmit,
  RfNested,
  RfPartial,
  RfSpan,
  RfBitwise,
  RfAction,
  RfActionResult,
  RfFile,
  RfRadioGroup,
  RfRadio,
  RfRequire,
  RfScope
};

export default installer(components);

export {
  RfCheckbox,
  RfInput,
  RfTextarea,
  RfSelect,
  RfDatepicker,
  RfResource,
  RfForm,
  RfSubmit,
  RfNested,
  RfPartial,
  RfSpan,
  RfBitwise,
  RfAction,
  RfActionResult,
  RfRequire,
  RfScope,
  descriptors,
  mutations,
  components,
  AutocompleteProvider,
  Resource,
  installer
};
