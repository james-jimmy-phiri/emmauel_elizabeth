import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
  light?: boolean
}

export default function ThemeToggle({ className = '', light = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      data-light={light || undefined}
    >
      <span className="material-symbols-outlined theme-toggle__icon">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  )
}
