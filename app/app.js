import 'materialize-css/bin/materialize.css'
import 'babel-polyfill'
import $ from "jquery"
import _ from "underscore"
import Backbone from "backbone"
import 'materialize-css/bin/materialize.js'
import mockData from './js/mockdata'
import RepositoryCollection from './js/repository.collection'

const reposCollection = new RepositoryCollection(mockData);

document.querySelector("#repos").innerHTML = reposCollection.toHtml();