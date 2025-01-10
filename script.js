// const themeToggleButtons = document.querySelectorAll('.dropdown-item[data-bs-theme-value]');
// const themeIconActive = document.querySelector('.theme-icon-active use');
// const bdThemeText = document.getElementById('bd-theme-text');

// const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
// const getStoredTheme = () => localStorage.getItem('theme');
// const initialTheme = getStoredTheme() || 'auto';
// const themeButtons = {
//   light: {icon: '#sun-fill', text: 'Toggle Light theme'},
//   dark: {icon: '#moon-stars-fill', text: 'Toggle Dark theme'},
//   auto: {icon: '#circle-half', text: 'Toggle theme (auto)'},
// };

// const activateTheme = (theme) => {
//   //remove active class
//   document.querySelectorAll('.dropdown-item').forEach(element => element.classList.remove('active'));
//   const selectedButton = document.querySelector(`[data-bs-theme-value="${theme}"]`);
//   selectedButton.classList.add('active');

//   themeIconActive.setAttribute('href', themeButtons[theme].icon);
//   bdThemeText.innerText = themeButtons[theme].text;

//   setStoredTheme(theme);

//     // 2. Change CSS (or inline styles) based on the theme selected
//     if (theme === 'dark') {
//       document.body.classList.add('dark-theme');
//     } else {
//       document.body.classList.remove('dark-theme');
//     }
// };

// themeToggleButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const theme = button.getAttribute('data-bs-theme-value');
//     activateTheme(theme);
//   });
// });


// activateTheme(initialTheme);









// document.addEventListener('DOMContentLoaded', function () {
//     // 1. Select all dropdown items with the data-bs-theme-value attribute
//     const themeToggleButtons = document.querySelectorAll('.dropdown-item[data-bs-theme-value]');
//     const themeIconActive = document.querySelector('.theme-icon-active use');
//     const bdThemeText = document.getElementById('bd-theme-text');

//     // Object to easily access icons and texts for each theme mode
//     const themeButtons = {
//         light: { icon: '#sun-fill', text: 'Toggle Light theme' },
//         dark: { icon: '#moon-stars-fill', text: 'Toggle Dark theme' },
//         auto: { icon: '#circle-half', text: 'Toggle theme (auto)' },
//     };

//     // Helper function to set theme in local storage
//     const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
//     // Helper function to get stored theme from local storage
//     const getStoredTheme = () => localStorage.getItem('theme');

//     // 2. Determine the initial theme
//     const initialTheme = getStoredTheme() || 'auto'; // Default to "auto" if no stored theme

//     // 3. Function to activate the selected theme and update the UI
//     const activateTheme = (theme) => {
//         //Remove active class from all dropdown items
//         document.querySelectorAll('.dropdown-item').forEach(element => element.classList.remove('active'));

//         //Set the current dropdown item to active
//         const selectedButton = document.querySelector(`[data-bs-theme-value="${theme}"]`);
//         selectedButton.classList.add('active');

//         //Set the icon on the main dropdown button to match theme
//         themeIconActive.setAttribute('href', themeButtons[theme].icon);
//         bdThemeText.innerText = themeButtons[theme].text;

//         //Save the current theme to local storage
//         setStoredTheme(theme);

//         // Change CSS (or inline styles) based on the theme selected
//         if (theme === 'dark') {
//             document.body.classList.add('dark-theme');
//             document.body.classList.remove('light-theme'); // Ensure no conflicting classes
//         } else if (theme === 'light') {
//             document.body.classList.add('light-theme');
//             document.body.classList.remove('dark-theme');
//         }
//         else {
//             document.body.classList.remove('dark-theme');
//             document.body.classList.remove('light-theme');
//         }
//     };

//     // 4. Add click event listeners to the theme toggle buttons
//     themeToggleButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const theme = button.getAttribute('data-bs-theme-value');
//             activateTheme(theme);
//         });
//     });

//     //5. Set the initial theme based on what's stored (or default to auto)
//     activateTheme(initialTheme);
// });



// document.addEventListener('DOMContentLoaded', function () {
//     // 1. Select all dropdown items with the data-bs-theme-value attribute
//     const themeToggleButtons = document.querySelectorAll('.dropdown-item[data-bs-theme-value]');
//     const themeIconActive = document.querySelector('.theme-icon-active use');
//     const bdThemeText = document.getElementById('bd-theme-text');

//     // Object to easily access icons and texts for each theme mode
//     const themeButtons = {
//         light: { icon: '#sun-fill', text: 'Toggle Light theme' },
//         dark: { icon: '#moon-stars-fill', text: 'Toggle Dark theme' },
//         auto: { icon: '#circle-half', text: 'Toggle theme (auto)' },
//     };

//     // Helper function to set theme in local storage
//     const setStoredTheme = (theme) => localStorage.setItem('theme', theme);
//     // Helper function to get stored theme from local storage
//     const getStoredTheme = () => localStorage.getItem('theme');

//     // 2. Determine the initial theme
//     const initialTheme = getStoredTheme() || 'auto'; // Default to "auto" if no stored theme

//     // 3. Function to activate the selected theme and update the UI
//     const activateTheme = (theme) => {
//         //Remove active class from all dropdown items
//         document.querySelectorAll('.dropdown-item').forEach(element => element.classList.remove('active'));

//         //Set the current dropdown item to active
//         const selectedButton = document.querySelector(`[data-bs-theme-value="${theme}"]`);
//         selectedButton.classList.add('active');

//         //Set the icon on the main dropdown button to match theme
//         themeIconActive.setAttribute('href', themeButtons[theme].icon);
//         bdThemeText.innerText = themeButtons[theme].text;

//         //Save the current theme to local storage
//         setStoredTheme(theme);

//         // Change CSS (or inline styles) based on the theme selected
//         if (theme === 'dark') {
//             document.body.classList.add('dark-theme');
//             document.body.classList.remove('light-theme'); // Ensure no conflicting classes
//         } else if (theme === 'light') {
//             document.body.classList.add('light-theme');
//             document.body.classList.remove('dark-theme');
//         }
//         else {
//             document.body.classList.remove('dark-theme');
//             document.body.classList.remove('light-theme');
//         }
//     };

//     // 4. Add click event listeners to the theme toggle buttons
//     themeToggleButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const theme = button.getAttribute('data-bs-theme-value');
//             activateTheme(theme);
//         });
//     });

//     //5. Set the initial theme based on what's stored (or default to auto)
//     activateTheme(initialTheme);
// });








document.getElementById('btnSwitch').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
})