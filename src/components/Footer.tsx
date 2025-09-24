export default function Footer() {
  const year = new Date().getFullYear();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <footer className="p-8 text-center bg-background text-primary dark:bg-dark-background dark:text-dark-text">
      <div>&copy; {year} Atlas School</div>
      <button
        className="mt-4 px-4 py-2 rounded bg-accent text-background hover:bg-secondary transition-colors duration-200 dark:bg-dark-accent dark:text-dark-background dark:hover:bg-dark-secondary"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </footer>
  );
}
