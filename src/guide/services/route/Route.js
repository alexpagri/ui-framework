
import { slugifyEach } from '../string/Slug';

// Components
import AddOnControlExample from '../../views/addOnControl/AddOnControlExample.jsx';
import AppHeaderExample from '../../views/appHeader/AppHeaderExample.jsx';
import BodyExample from '../../views/body/BodyExample.jsx';
import ButtonExample from '../../views/button/ButtonExample.jsx';
import ChartExample from '../../views/chart/ChartExample.jsx';
import CheckBoxExample from '../../views/checkBox/CheckBoxExample.jsx';
import GridExample from '../../views/grid/GridExample.jsx';
import GridKpiExample from '../../views/gridKpi/GridKpiExample.jsx';
import IconExample from '../../views/icon/IconExample.jsx';
import LabeledControlExample from '../../views/labeledControl/LabeledControlExample.jsx';
import LabelExample from '../../views/label/LabelExample.jsx';
import ModalExample from '../../views/modal/ModalExample.jsx';
import SpinnerExample from '../../views/spinner/SpinnerExample.jsx';
import TextExample from '../../views/text/TextExample.jsx';
import TextInputExample from '../../views/textInput/TextInputExample.jsx';
import TitleBarExample from '../../views/titleBar/TitleBarExample.jsx';
import TitledViewExample from '../../views/titledView/TitledViewExample.jsx';
import VerticalLayoutExample from '../../views/verticalLayout/VerticalLayoutExample.jsx';
import ViewHeaderExample from '../../views/viewHeader/ViewHeaderExample.jsx';

// Integrations
import GridViewExample from '../../views/gridView/GridViewExample.jsx';

// Component route names should match the component name exacty.
const components = [{
  name: 'AddOnControl',
  component: AddOnControlExample,
}, {
  name: 'AppHeader',
  component: AppHeaderExample,
}, {
  name: 'Body',
  component: BodyExample,
}, {
  name: 'Button',
  component: ButtonExample,
}, {
  name: 'Chart',
  component: ChartExample,
}, {
  name: 'CheckBox',
  component: CheckBoxExample,
}, {
  name: 'Grid',
  component: GridExample,
}, {
  name: 'GridKpi',
  component: GridKpiExample,
}, {
  name: 'Icon',
  component: IconExample,
}, {
  name: 'LabeledControl',
  component: LabeledControlExample,
}, {
  name: 'Label',
  component: LabelExample,
}, {
  name: 'Modal',
  component: ModalExample,
}, {
  name: 'Spinner',
  component: SpinnerExample,
}, {
  name: 'Text',
  component: TextExample,
}, {
  name: 'TextInput',
  component: TextInputExample,
}, {
  name: 'TitleBar',
  component: TitleBarExample,
}, {
  name: 'VerticalLayout',
  component: VerticalLayoutExample,
}, {
  name: 'ViewHeader',
  component: ViewHeaderExample,
}];

// Integration names should be descriptive and utilize spaces.
const integrations = [{
  name: 'Grid View',
  component: GridViewExample,
}, {
  name: 'Titled View',
  component: TitledViewExample,
}];

// Protoypes should point to HTML files and can be named whatever you want.
const prototypes = [{
  name: 'Grid View',
  href: '/prototype/gridView/gridView.html',
}];

export default {
  components: slugifyEach(components, 'name', 'path'),
  integrations: slugifyEach(integrations, 'name', 'path'),
  prototypes: prototypes.slice(),
  getAppRoutes: function getAppRoutes() {
    const list = this.components.concat(this.integrations);
    return list;
  },
};
