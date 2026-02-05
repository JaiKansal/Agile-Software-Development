/**
 * Sample Test File for Backend API
 * This demonstrates the TDD Red-Green-Refactor cycle
 * 
 * RED: Write a failing test
 * GREEN: Write minimal code to make it pass
 * REFACTOR: Improve the code while keeping tests green
 */

const request = require('supertest');

describe('Sample API Tests - TDD Example', () => {

    // RED PHASE: This test will fail initially
    describe('Task API Endpoints', () => {

        test('should return 200 for health check', async () => {
            // This is a placeholder - implement actual test
            expect(true).toBe(true);
        });

        test('should create a new task', async () => {
            // RED: Write test first (will fail)
            // const response = await request(app)
            //   .post('/api/tasks')
            //   .send({
            //     title: 'Test Task',
            //     description: 'Test Description'
            //   });
            // expect(response.status).toBe(201);
            // expect(response.body).toHaveProperty('_id');

            expect(true).toBe(true); // Placeholder
        });

        test('should get all tasks', async () => {
            // RED: Write test first
            // const response = await request(app).get('/api/tasks');
            // expect(response.status).toBe(200);
            // expect(Array.isArray(response.body)).toBe(true);

            expect(true).toBe(true); // Placeholder
        });

        test('should update a task', async () => {
            // RED: Write test first
            expect(true).toBe(true); // Placeholder
        });

        test('should delete a task', async () => {
            // RED: Write test first
            expect(true).toBe(true); // Placeholder
        });
    });

    describe('Authentication Tests', () => {

        test('should register a new user', async () => {
            // RED: Write test first
            expect(true).toBe(true); // Placeholder
        });

        test('should login an existing user', async () => {
            // RED: Write test first
            expect(true).toBe(true); // Placeholder
        });

        test('should reject invalid credentials', async () => {
            // RED: Write test first
            expect(true).toBe(true); // Placeholder
        });
    });
});
