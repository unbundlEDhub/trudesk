/**
      .                              .o8                     oooo
   .o8                             "888                     `888
 .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
   888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
   888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
   888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
   "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 ========================================================================
 Created:    02/10/2015
 Author:     Chris Brame

 **/

var mongoose    = require('mongoose');
var _           = require('underscore');
var accountsSchema = require('./user');
var groupSchema = require('./group');

var COLLECTION = 'reports';

var reportSchema = mongoose.Schema({
    name:       { type: String, required: true },
    runDate:    { type: Date, required: true, default: Date.now },
    group:      [{type: mongoose.Schema.Types.ObjectId, ref: 'groups'}],
    data:       [mongoose.Schema.Types.Mixed]
});

module.exports = mongoose.model(COLLECTION, reportSchema);