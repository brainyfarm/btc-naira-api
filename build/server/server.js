'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _console = require('console');

var _console2 = _interopRequireDefault(_console);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const app = (0, _express2.default)();
const PORT = process.env.PORT;

app.get('/api/v1', (req, res) => {
  return res.json({
    message: "Welcome to BTC Naira API"
  });
});

app.listen(PORT, () => _console2.default.log(`Server running on ${PORT}`));