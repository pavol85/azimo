import 'materialize-css/bin/materialize.css'
import './styles/style.less'
import 'babel-polyfill'
import $ from "jquery"
import _ from "underscore"
import Backbone from "backbone"
import 'materialize-css/bin/materialize.js'
import mockData from './js/mockdata'
import LoginView from './js/Views/view.login'
import Login from './js/login'

const loginContent = $('#az-login');
const loginVal = loginContent.find('input#login').val();
const passVal = loginContent.find('input#password').val();
const loginActionBtn = loginContent.find('#az-login-action');

var login = Login(loginVal, passVal);

loginActionBtn.on('click' , () => {
    login.login();
});


