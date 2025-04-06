const TestFramework = {
    tests: [],

    test: function(name, fn) {
        this.tests.push({ name, fn });
    },

    assertTrue: function(condition, message) {
        if (!condition) {
            throw new Error(message || "Assertion failed: expected true but got false");
        }
    },

    assertFalse: function(condition, message) {
        if (condition) {
            throw new Error(message || "Assertion failed: expected false but got true");
        }
    },

    assertEquals: function(expected, actual, message) {
        if (expected != actual) {
            throw new Error(message || `Assertion failed: expected ${expected} but got ${actual}`);
        }
    },

    assertStrictEqual: function(expected, actual, message) {
        if (expected !== actual) {
            throw new Error(message || `Assertion failed: expected ${expected} but got ${actual}`);
        }
    },

    assertGreaterThan: function(a, b, message) {
        if (!(a > b)) {
            throw new Error(message || `Assertion failed: expected ${a} to be greater than ${b}`);
        }
    },

    assertLessThan: function(a, b, message) {
        if (!(a < b)) {
            throw new Error(message || `Assertion failed: expected ${a} to be less than ${b}`);
        }
    },

    assertGreaterOrEqual: function(a, b, message) {
        if (!(a >= b)) {
            throw new Error(message || `Assertion failed: expected ${a} to be greater than or equal to ${b}`);
        }
    },

    assertLessOrEqual: function(a, b, message) {
        if (!(a <= b)) {
            throw new Error(message || `Assertion failed: expected ${a} to be less than or equal to ${b}`);
        }
    },

    assertMatchesRegex: function(regex, value, message) {
        if (!regex.test(value)) {
            throw new Error(message || `Assertion failed: value '${value}' does not match regex ${regex}`);
        }
    },

    runTests: function() {
        let passed = 0;
        let failed = 0;

        this.tests.forEach(test => {
            try {
                test.fn();
                console.log(`[PASS] ${test.name} - PASSED`);
                passed++;
            } catch (error) {
                console.error(`[FAIL] ${test.name} - FAILED: ${error.message}`);
                failed++;
            }
        });

        console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
    }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = TestFramework;
} else {
    window.TestFramework = TestFramework;
}
