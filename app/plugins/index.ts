import Vue from 'nativescript-vue';
import RadDataForm from 'nativescript-ui-dataform/vue';
import RadListView from 'nativescript-ui-listview/vue';
import RadCalendar from 'nativescript-ui-calendar/vue';
import RadAutoComplete from 'nativescript-ui-autocomplete/vue';
import BottomNavigation from 'nativescript-bottom-navigation/vue';

export default function InitPlugins() {

    Vue.registerElement(
        'RadSideDrawer',
        () => require('nativescript-ui-sidedrawer').RadSideDrawer
    );

    Vue.use(RadDataForm);
    Vue.use(RadListView);
    Vue.use(RadCalendar);
    Vue.use(RadAutoComplete);
    Vue.use(BottomNavigation);
}