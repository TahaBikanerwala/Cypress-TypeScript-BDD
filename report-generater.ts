const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './reports/',
	reportPath: './reports/html-report',
	metadata:{
        browser: {
            name: "chrome",
            version: ' 102.0.5005.61 (Official Build) (64-bit)'
        },
        device: 'Local test machine',
        platform: {
            name: 'popOS!',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress BDD Typescript'},
            {label: 'Release', value: '1.1.2'},
            {label: 'Execution Start Time', value:  new Date()},
            {label: 'Execution End Time', value: new Date()}
        ]
    }
});