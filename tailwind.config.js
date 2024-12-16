/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#fff8e7', // Тёплый светлый фон
          primary: '#5b4636', // Тёплый коричневый для текста
          header: '#fce6c9', // Нежный персиковый для хедера
          button: '#f4c095', // Светло-оранжевый для кнопки
          buttonText: '#3a2a20', // Темно-коричневый для текста на кнопке
        },
        dark: {
          background: '#1a202c', // Темный фон
          primary: '#f7fafc', // Светлый текст
          header: '#2d3748', // Темный хедер
          button: '#4a5568', // Серый для кнопки
          buttonText: '#edf2f7', // Светлый текст на кнопке
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Включаем переключение темы через класс
}
