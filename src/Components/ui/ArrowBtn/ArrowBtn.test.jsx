import { render, screen, waitFor } from '@testing-library/react';
import ArrowBtn from './ArrowBtn';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act } from 'react';

const MockIntersectionObserver = vi
  .fn()
  .mockImplementation(function (callback, options) {
    this.callback = callback;
    this.options = options;
    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
    this.trigerIntersect = (isIntersecting) => {
      this.callback([{ isIntersecting }]);
    };
  });

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

describe('ArrowBtn', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    const sections = ['about', 'skills', 'portfolio', 'contact'];
    sections.forEach((id) => {
      const section = document.createElement('div');
      section.id = id;
      document.body.appendChild(section);
    });
  });

  it('рендерится с правильной ссылкой skills', () => {
    render(<ArrowBtn section='skills' />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#skills');
  });

  it('показывает стрелку, если секция не видна', async () => {
    render(<ArrowBtn section='skills' />);
    const observer = IntersectionObserver.mock.instances[0];

    act(() => {
      observer.trigerIntersect(false);
    });
    const link = screen.getByRole('link');
    await waitFor(() => {
      expect(link.getAttribute('style')).toContain('opacity: 1');
    });
  });

  it('скрывает стрелку, если секция видна', async () => {
    render(<ArrowBtn section='skills' />);
    const observer = IntersectionObserver.mock.instances[0];

    act(() => {
      observer.trigerIntersect(true);
    });
    const link = screen.getByRole('link');
    await waitFor(
      () => {
        expect(link.getAttribute('style')).toContain('opacity: 0');
      },
      { timeout: 1500 }
    );
  });

  it('передается нужный атрибут portfolio', () => {
    render(<ArrowBtn section='portfolio' />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#portfolio');
  });
});
