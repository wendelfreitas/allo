const { TestEnvironment } = require('jest-environment-jsdom');

class ReactActEnvironment extends TestEnvironment {
  constructor(config, context) {
    super(config, context);
    this.global.IS_REACT_ACT_ENVIRONMENT = true;
  }

  async setup() {
    await super.setup();
    this.global.IS_REACT_ACT_ENVIRONMENT = true;
  }
}

module.exports = ReactActEnvironment;
