import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home, FlaskConical, Search, Calculator, Grid, FileText, Beaker, Languages, Menu } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

import HomePage from './pages/HomePage';
import ExperimentsPage from './pages/ExperimentsPage';
import SearchPage from './pages/SearchPage';
import CalculatorPage from './pages/CalculatorPage';
import PeriodicTablePage from './pages/PeriodicTablePage';
import ReportsPage from './pages/ReportsPage';

const Sidebar: React.FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => {
  const { t, language, setLanguage, availableLanguages } = useLanguage();

  const navItems = [
    { path: '/', label: t.sidebar.home, icon: Home },
    { path: '/experiments', label: t.sidebar.experiments, icon: FlaskConical },
    { path: '/search', label: t.sidebar.search, icon: Search },
    { path: '/calculator', label: t.sidebar.calculator, icon: Calculator },
    { path: '/periodic-table', label: t.sidebar.periodicTable, icon: Grid },
    { path: '/reports', label: t.sidebar.reports, icon: FileText },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <aside className="w-64 bg-gray-900/80 backdrop-blur-sm border-r border-gray-700/50 flex-shrink-0 flex flex-col p-4 h-full">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Beaker className="text-cyan-400 h-8 w-8" />
        <h1 className="text-xl font-bold text-white">Chemistry AI</h1>
      </div>
      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-cyan-500/10 text-cyan-400'
                  : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <label htmlFor="language-select" className="flex items-center gap-2 text-sm text-gray-400 mb-2 px-1">
            <Languages size={16} />
            {t.sidebar.language}
        </label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-2 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none transition"
        >
          {Object.entries(availableLanguages).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/40">
        
        {/* Mobile Sidebar (Drawer) */}
        <div className={`fixed inset-y-0 left-0 z-40 lg:hidden transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
        </div>
        {isSidebarOpen && (
            <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:flex flex-shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mobile Header */}
            <header className="lg:hidden flex items-center p-4 bg-gray-900/70 backdrop-blur-sm border-b border-gray-800 flex-shrink-0">
                <button onClick={() => setIsSidebarOpen(true)} className="text-gray-300 hover:text-white mr-4">
                    <Menu size={24} />
                </button>
                <div className="flex items-center gap-2">
                    <Beaker className="text-cyan-400 h-6 w-6" />
                    <h1 className="text-lg font-bold text-white">Chemistry AI</h1>
                </div>
            </header>
          
            <main className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/experiments" element={<ExperimentsPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/calculator" element={<CalculatorPage />} />
                    <Route path="/periodic-table" element={<PeriodicTablePage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                </Routes>
            </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;