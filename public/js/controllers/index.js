var app = require('angular').module('codeNotes');
import NoteCtrl from './NoteCtrl';
import MenuCtrl from './MenuCtrl';
import ModalInstanceCtrl from './ModalInstanceCtrl';


// defining all the controllers here, and then import index file into app.js
app.controller('NoteCtrl', NoteCtrl);
app.controller('MenuCtrl', MenuCtrl);
app.controller('ModalInstanceCtrl', ModalInstanceCtrl);