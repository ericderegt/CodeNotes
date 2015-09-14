var app = require('angular').module('codeNotes');
import NoteCtrl from './NoteCtrl';
import MenuCtrl from './MenuCtrl';
import ModalInstanceCtrl from './ModalInstanceCtrl';

app.controller('NoteCtrl', NoteCtrl);
app.controller('MenuCtrl', MenuCtrl);
app.controller('ModalInstanceCtrl', ModalInstanceCtrl);