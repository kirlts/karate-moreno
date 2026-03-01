import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver for Framer Motion
class IntersectionObserverMock {
    constructor() { }
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Stub the global import.meta for Vitest
vi.stubGlobal('import', {
    meta: {
        env: {
            BASE_URL: '/karate-moreno/'
        }
    }
});
