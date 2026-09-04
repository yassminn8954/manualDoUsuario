import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('deve renderizar sem erros', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })
})
