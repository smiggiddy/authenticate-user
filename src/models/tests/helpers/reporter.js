  const SpecReporter = require('jasmine-spec-reporter').SpecReporter
  const DisplayProcessor = require('jasmine-spec-reporter').SpecReporter
  const StacktraceOption = require('jasmine-spec-reporter').SpecReporter
  
  
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(
    new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.NONE,
        displayPending: true,
      },
    })
  );
  