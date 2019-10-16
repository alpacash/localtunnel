const { Transform } = require('stream');

class HeaderHostTransformer extends Transform {
  constructor(opts = {}) {
    super(opts);
    this.host = opts.host || 'localhost';
    this.replaced = false;
  }

  _transform(data, encoding, callback) {
    callback(
      null,
      data.toString().replace(/(\r\n[Hh]ost: )\S+/, (match, $1) => {
        return $1 + this.host;
      })
    );
  }
}

module.exports = HeaderHostTransformer;
