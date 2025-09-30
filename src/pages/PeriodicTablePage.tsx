import React, { useState, useMemo } from 'react';
import type { ElementData } from '../types';
import { PERIODIC_TABLE_DATA } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

const categoryColors: { [key: string]: string } = {
  'diatomic nonmetal': 'bg-green-500/80 hover:bg-green-400',
  'noble gas': 'bg-purple-500/80 hover:bg-purple-400',
  'alkali metal': 'bg-red-500/80 hover:bg-red-400',
  'alkaline earth metal': 'bg-orange-500/80 hover:bg-orange-400',
  metalloid: 'bg-yellow-500/80 hover:bg-yellow-400',
  'polyatomic nonmetal': 'bg-green-600/80 hover:bg-green-500',
  'post-transition metal': 'bg-blue-400/80 hover:bg-blue-300',
  'transition metal': 'bg-blue-600/80 hover:bg-blue-500',
  lanthanide: 'bg-indigo-400/80 hover:bg-indigo-300',
  actinide: 'bg-indigo-600/80 hover:bg-indigo-500',
  'unknown, probably transition metal': 'bg-gray-500/80 hover:bg-gray-400',
  'unknown, probably post-transition metal': 'bg-gray-500/80 hover:bg-gray-400',
  'unknown, probably metalloid': 'bg-gray-500/80 hover:bg-gray-400',
  'unknown, predicted to be noble gas': 'bg-gray-500/80 hover:bg-gray-400',
};

const ElementTile: React.FC<{ element: ElementData; onClick: () => void }> = ({ element, onClick }) => (
  <div
    onClick={onClick}
    className={`p-1 rounded-md cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10 relative ${categoryColors[element.category] || 'bg-gray-700'}`}
    style={{ gridColumn: element.xpos, gridRow: element.ypos }}
  >
    <div className="text-[10px] sm:text-xs text-white/70">{element.number}</div>
    <div className="text-base sm:text-xl font-bold text-center">{element.symbol}</div>
    <div className="text-[10px] sm:text-xs truncate text-center">{element.name}</div>
  </div>
);

const ElementDetail: React.FC<{ element: ElementData; onClose: () => void }> = ({ element, onClose }) => {
    const { t } = useLanguage();
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 border border-gray-700 rounded-lg max-w-2xl w-full relative p-6 shadow-2xl animate-fade-in-up">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
                    <X size={24} />
                </button>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex flex-col justify-center items-center rounded-lg ${categoryColors[element.category] || 'bg-gray-700'}`}>
                        <div className="text-sm">{element.number}</div>
                        <div className="text-3xl sm:text-4xl font-bold">{element.symbol}</div>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">{element.name}</h2>
                        <p className="capitalize text-cyan-400">{t.periodicTablePage.categories[element.category.replace(/,.*?$/, '')] || element.category}</p>
                        <p className="text-sm mt-2 text-gray-400">{element.summary}</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-sm">
                    <div><strong className="text-gray-300">{t.periodicTablePage.atomicMass}:</strong> <span className="text-white">{element.atomic_mass.toFixed(3)}</span></div>
                    <div><strong className="text-gray-300">{t.periodicTablePage.density}:</strong> <span className="text-white">{element.density ?? 'N/A'} g/cm³</span></div>
                    <div><strong className="text-gray-300">{t.periodicTablePage.phase}:</strong> <span className="text-white capitalize">{element.phase}</span></div>
                    <div><strong className="text-gray-300">{t.periodicTablePage.melt}:</strong> <span className="text-white">{element.melt ? `${(element.melt - 273.15).toFixed(2)} °C` : 'N/A'}</span></div>
                    <div><strong className="text-gray-300">{t.periodicTablePage.boil}:</strong> <span className="text-white">{element.boil ? `${(element.boil - 273.15).toFixed(2)} °C` : 'N/A'}</span></div>
                    <div><strong className="text-gray-300">{t.periodicTablePage.discoveredBy}:</strong> <span className="text-white">{element.discovered_by ?? 'N/A'}</span></div>
                </div>
                 <div className="mt-4 text-xs sm:text-sm break-words">
                    <strong className="text-gray-300">{t.periodicTablePage.electronConfig}:</strong> <span className="text-white font-mono">{element.electron_configuration_semantic}</span>
                </div>
            </div>
        </div>
    );
};

const PeriodicTablePage: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
  const { t } = useLanguage();

  const periodicTable = useMemo(() => PERIODIC_TABLE_DATA, []);

  const categoryTranslations = t.periodicTablePage.categories;

  return (
    <div className="p-4 md:p-6 h-full flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">{t.periodicTablePage.title}</h2>
        <p className="text-gray-400 mb-6 text-center">{t.periodicTablePage.description}</p>
        
        <div className="w-full overflow-x-auto pb-4">
            <div className="grid gap-1 min-w-[900px]" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
                {periodicTable.map(el => (
                    <ElementTile key={el.number} element={el} onClick={() => setSelectedElement(el)} />
                ))}
            </div>
        </div>
        
        <div className="mt-6 w-full max-w-4xl">
            <h3 className="text-lg font-semibold text-center mb-2">{t.periodicTablePage.legend}</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
                {Object.entries(categoryColors).map(([category, className]) => {
                    const cleanCategory = category.replace(/,.*?$/, '');
                    const translatedCategory = categoryTranslations[cleanCategory] || cleanCategory;
                    if (!translatedCategory) return null;
                    return (
                        <div key={category} className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-sm ${className.split(' ')[0]}`}></div>
                            <span className="capitalize text-gray-400">{translatedCategory}</span>
                        </div>
                    );
                })}
            </div>
        </div>

        {selectedElement && <ElementDetail element={selectedElement} onClose={() => setSelectedElement(null)} />}
    </div>
  );
};

export default PeriodicTablePage;