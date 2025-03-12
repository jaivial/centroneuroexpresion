/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            heading: ['Quicksand', 'sans-serif'],
            body: ['Nunito', 'sans-serif'],
            accent: ['Varela Round', 'sans-serif'],
            sans: ['Nunito', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#FF9EBB',
                secondary: '#A2D2FF',
                accent: '#FFC8DD',
                background: '#FFFFFF',
                text: '#3D3D3D',
                'light-gray': '#F5F5F5',
            },
            borderRadius: {
                button: '20px',
                card: '16px',
                input: '12px',
            },
            boxShadow: {
                sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
                md: '0 4px 6px rgba(0, 0, 0, 0.1)',
                lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
                card: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            spacing: {
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}; 