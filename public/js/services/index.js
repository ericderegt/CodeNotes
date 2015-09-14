var app = require('angular').module('codeNotes');
import NoteService from './NoteService';
import CategoryService from './CategoryService';


app.factory('NoteService', NoteService);
app.factory('CategoryService', CategoryService);