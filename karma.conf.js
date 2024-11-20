// karma.conf.js
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage"),
            require("@angular-devkit/build-angular/plugins/karma")
        ],
        reporters: ["progress", "kjhtml", "coverage"],
        coverageReporter: {
            subdir: ".",
            reporters: [{ type: "html" }, { type: "text-summary" }, { type: "lcov" }]
        }
    });
};
