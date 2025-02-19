
import '../src/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Microsoft Edge News</h1>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-white border border-gray-300"
            />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-1/4 bg-white p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">World</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Tech</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Business</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Science</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Sports</a></li>
            </ul>
          </aside>

          {/* News Feed */}
          <section className="flex-1 p-6 space-y-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-xl font-semibold">Top Story</h2>
              <p className="mt-2">Here’s where the latest headline goes, with an article preview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold">Trending Article 1</h3>
                <p className="mt-2">Summary or short preview of the article goes here.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold">Trending Article 2</h3>
                <p className="mt-2">Summary or short preview of the article goes here.</p>
              </div>
              <div className="bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold">Trending Article 3</h3>
                <p className="mt-2">Summary or short preview of the article goes here.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4">
          <p className="text-center text-sm">© 2025 Microsoft Edge News</p>
        </footer>
      </div>

      {/* Routes Section */}
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
