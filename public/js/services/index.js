var app = require('angular').module('codeNotes');
import NoteService from './NoteService';


app.factory('NoteService', NoteService);