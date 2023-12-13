import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import store from './store';
import * as Sentry from "@sentry/vue";
Vue.config.productionTip = false

Sentry.init({
    dsn: "https://cb524c863d6c6c4cbc5c59a8a80ff37b@o4506386926600192.ingest.sentry.io/4506387456262144",
    integrations: [
        new Sentry.BrowserTracing({
            tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        }),
        new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // xiugai 
});

new Vue({
    router,
    // store,
    render: h => h(App),
}).$mount('#app')