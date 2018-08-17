/**
 * Created by mingchen.xiao on 2016/6/29.
 */

require.config({
    baseUrl: '/static/js',
    paths: {
        'jquery' : 'core/jquery.min',
        'jquery-blockUI' : 'plugins/jquery.blockUI',
        'bootstrap' : 'core/bootstrap.min',
        'slimscroll': 'core/jquery.slimscroll.min',
        'scrollLock': 'core/jquery.scrollLock.min',
        'appear': 'core/jquery.appear.min',
        'countTo': 'core/jquery.countTo.min',
        'placeholder': 'core/jquery.placeholder.min',
        'angular' : 'plugins/angular/angular.min' ,
        'angular-ui-router': 'plugins/angular-ui-router/angular-ui-router.min',
        'angular-resource': 'plugins/angular-resource/angular-resource.min',
        'angular-cookies' : 'plugins/angular-cookies/angular-cookies.min',
        'angular-sanitize' : 'plugins/angular-sanitize/angular-sanitize.min' ,
        'angular-translate' : 'plugins/angular-translate/angular-translate.min',
        'w5c-validator' : 'plugins/w5c-validator/w5cValidator.min' ,
        'ne-app' : 'core/app',
        'services' : 'services/services',
        'js-beautify' : 'plugins/do_js_beautify',
        'bootbox' : 'plugins/bootbox.min'
    },
    shim: {
        'app': {
            deps: ['jquery-blockUI' , 'angular','angular-ui-router' , 'angular-cookies' , 'angular-resource' , 'w5c-validator' , 'bootstrap' , 'slimscroll' , 'scrollLock' , 'appear' , 'placeholder']
        },
        'angular' : {
            deps: ['jquery']
        },
        'bootstrap' : {
            deps: ['jquery']
        },
        'slimscroll' : {
            deps: ['jquery']
        },
        'scrollLock' : { deps: ['jquery']},
        'jquery-blockUI' : { deps: ['jquery']},
        'appear' : { deps: ['jquery']},
        'countTo' : { deps: ['jquery']},
        'placeholder' : { deps: ['jquery']},
        'bootbox' : { deps: ['jquery','bootstrap']},
        'w5c-validator' : {deps : ['angular' , 'angular-translate']} ,
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'uiBootstrap': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'services': {
            deps: ['angular']
        }
    }
});

require(['app', 'controllers/index'], function(app) {
    angular.bootstrap(document, ['app']);
});