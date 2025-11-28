function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Prabhdeep S. Singh. All rights reserved.
        </p>
        <p className="text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
