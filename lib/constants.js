const {sep} = require('path');

exports.EV_ALL = 'all';
exports.EV_READY = 'ready';
exports.EV_ADD = 'add';
exports.EV_CHANGE = 'change';
exports.EV_ADD_DIR = 'addDir';
exports.EV_UNLINK = 'unlink';
exports.EV_UNLINK_DIR = 'unlinkDir';
exports.EV_RAW = 'raw';
exports.EV_ERROR = 'error';

exports.STR_DATA = 'data';
exports.STR_END = 'end';
exports.STR_CLOSE = 'close';

exports.GLOB_STAR = '/**/*';
exports.DOT_SLASH = '.' + sep;

exports.FSEVENT_CREATED = 'created';
exports.FSEVENT_MODIFIED = 'modified';
exports.FSEVENT_DELETED = 'deleted';
exports.FSEVENT_MOVED = 'moved';
exports.FSEVENT_CLONED = 'cloned';
exports.FSEVENT_UNKNOWN = 'unknown';

exports.KEY_LISTENERS = 'listeners';
exports.KEY_ERR = 'errHandlers';
exports.KEY_RAW = 'rawEmitters';
exports.HANDLER_KEYS = [exports.KEY_LISTENERS, exports.KEY_ERR, exports.KEY_RAW];

exports.BACK_SLASH_RE = /\\/g;
exports.DOUBLE_SLASH_RE = /\/\//;
exports.SLASH_OR_BACK_SLASH_RE = /[\/\\]/;
exports.DOT_RE = /\..*\.(sw[px])$|\~$|\.subl.*\.tmp/;
exports.REPLACER_RE = /^\.[\/\\]/;

exports.SLASH = '/';
exports.BRACE_START = '{';
exports.BANG = '!';
exports.ONE_DOT = '.';
exports.TWO_DOTS = '..';
exports.GLOBSTAR = '**';
exports.SLASH_GLOBSTAR = '/**';
exports.ANYMATCH_OPTS = {dot: true};
exports.STRING_TYPE = 'string';
exports.FUNCTION_TYPE = 'function';
exports.EMPTY_STR = '';
exports.EMPTY_FN = () => {};
exports.IDENTITY_FN = (val => val);

const {platform} = process;
exports.isWindows = platform === 'win32';
exports.isMacos = platform === 'darwin';
