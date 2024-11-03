const Footer =() => {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center w-full bg-gray-900 text-moon gap-4 px-10 py-4">
      <div className="font-body italic text-lg">
          &copy; {new Date().getFullYear()} Shadow Decks
      </div>

        <img
          className="hidden md:flex w-16"
          src="/public/Shadow-Decks-logo.png"
          alt="logo de Shadow Decks"
        />

        <div className="flex text-3xl gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

    </footer>
  )
}

export default Footer
