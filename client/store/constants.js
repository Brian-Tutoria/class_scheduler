const keys = [
	// session
	'RECEIVE_CURRENT_USER',
	'LOGOUT',
	// language
	'SET_LANGUAGE',
	// form
	'RECEIVE_VALUE',
	'CLEAR_ERRORS',
	'RECEIVE_FORM_ERRORS',
	// requests pending
	'REQUEST_PENDING',
	'REQUEST_RESOLVED',
	// classes
	'REQUEST_CREATE_CLASS',
	'RECEIVE_TAUGHT_CLASS',
	'RECEIVE_CLASS_ERRORS',

];

const constants = {};
keys.forEach(key => constants[key] = key);

export default constants;
