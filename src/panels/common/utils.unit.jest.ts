/**
 * Tests for utils
 */
import { GetDecimalsForValue } from './utils';

describe('Utils GetDecimalsForValue', () => {
  describe('With two decimals', () => {
    it('returns 2 decimals', () => {
      const result = GetDecimalsForValue(10.55, 2);
      expect(result.decimals).toBe(2);
    });
    it('returns 1 decimal', () => {
      const result = GetDecimalsForValue(10.55, 1);
      expect(result.decimals).toBe(1);
    });
  });
});
