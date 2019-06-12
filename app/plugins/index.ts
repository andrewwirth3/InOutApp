import Vue from 'nativescript-vue';
import RadDataForm from 'nativescript-ui-dataform/vue';
import RadListView from 'nativescript-ui-listview/vue';
import RadCalendar from 'nativescript-ui-calendar/vue';
import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

Vue.registerElement(
    'RadSideDrawer',
    () => require('nativescript-ui-sidedrawer').RadSideDrawer
);

Vue.use(RadDataForm);
Vue.use(RadListView);
Vue.use(RadCalendar);
Vue.use(RadAutoComplete);

// fonticons
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    fa: 'fontawesome.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
