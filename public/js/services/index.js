var app = require('angular').module('codeNotes');
import NoteService from './NoteService';
import CategoryService from './CategoryService';


// defining all the services here, and then import index file into app.js
app.factory('NoteService', NoteService);
app.factory('CategoryService', CategoryService);