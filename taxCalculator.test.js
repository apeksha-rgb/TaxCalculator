const { calculateTax } = require('./script');

describe('Tax Calculator', () => {
    test('calculates tax for income under 8 Lakhs without deductions', () => {
        // Gross Annual Income + Extra Income - Deductions = 6 Lakhs
        expect(calculateTax(600000, 0, 0, 'less_than_40')).toBe(600000); // No tax
    });

    test('calculates tax for income over 8 Lakhs without deductions (age < 40)', () => {
        // Gross Annual Income + Extra Income - Deductions = 9 Lakhs
        expect(calculateTax(900000, 0, 0, 'less_than_40')).toBe(820000); // Taxed amount: 9 Lakhs - 8 Lakhs = 1 Lakh * 0.30 = 30,000
    });

    test('calculates tax for income over 8 Lakhs without deductions (age ≥ 40 but < 60)', () => {
        // Gross Annual Income + Extra Income - Deductions = 40 Lakhs
        expect(calculateTax(4000000, 0, 0, 'between_40_and_60')).toBe(3640000); // Taxed amount: 40 Lakhs - 8 Lakhs = 32 Lakhs * 0.40 = 12.8 Lakhs
    });

    test('calculates tax for income over 8 Lakhs without deductions (age ≥ 60)', () => {
        // Gross Annual Income + Extra Income - Deductions = 40 Lakhs
        expect(calculateTax(4000000, 0, 0, 'greater_than_60')).toBe(3960000); // Taxed amount: 40 Lakhs - 8 Lakhs = 32 Lakhs * 0.10 = 3.2 Lakhs
    });

    test('calculates tax for income over 8 Lakhs with deductions', () => {
        // Gross Annual Income + Extra Income - Deductions = 40 Lakhs
        expect(calculateTax(4000000, 0, 100000, 'less_than_40')).toBe(3860000); // Taxed amount: 40 Lakhs - 8 Lakhs = 32 Lakhs * 0.30 = 9.6 Lakhs
    });

    // Add more test cases for different scenarios

    test('returns 0 for invalid inputs', () => {
        // Invalid input: characters instead of numbers
        expect(calculateTax('invalid', 'invalid', 'invalid', 'invalid')).toBe(0); // Should return 0
    });
});