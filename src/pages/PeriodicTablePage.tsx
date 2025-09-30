import React, { useState } from 'react';
import type { ElementData } from '../types';
import { PERIODIC_TABLE_DATA } from '../constants';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ElementTile: React.FC<{ element: ElementData; onSelect: (element: ElementData) => void; }> = ({ element, onSelect }) => {
  const { t } = useLanguage();
  const categoryColors: { [key: string]: string } = {
    'diatomic nonmetal': 'bg-green-500/30 border-green-400 hover:bg-green-500/50',
    'noble gas': 'bg-purple-500/30 border-purple-400 hover:bg-purple-500/50',
    'alkali metal': 'bg-red-500/30 border-red-400 hover:bg-red-500/50',
    'alkaline earth metal': 'bg-orange-500/30 border-orange-400 hover:bg-orange-500/50',
    'metalloid': 'bg-yellow-500/30 border-yellow-400 hover:bg-yellow-500/50',
    'polyatomic nonmetal': 'bg-green-600/30 border-green-500 hover:bg-green-600/50',
    'post-transition metal': 'bg-blue-500/30 border-blue-400 hover:bg-blue-500/50',
    'transition metal': 'bg-indigo-500/30 border-indigo-400 hover:bg-indigo-500/50',
    'lanthanide': 'bg-pink-500/30 border-pink-400 hover:bg-pink-500/50',
    'actinide': 'bg-rose-500/30 border-rose-400 hover:bg-rose-500/50',
    'unknown, probably transition metal': 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50',
    'unknown, probably post-transition metal': 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50',
    'unknown, probably metalloid': 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50',
    'unknown, predicted to be noble gas': 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50',

  };
  const defaultColor = 'bg-gray-700/30 border-gray-600 hover:bg-gray-700/50';
  const colorClass = categoryColors[element.category] || defaultColor;

  return (
    <div
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
      }}
      className={`p-1 md:p-2 border rounded-md cursor-pointer transition-all duration-200 hover:scale-110 hover:z-10 relative ${colorClass}`}
      onClick={() => onSelect(element)}
    >
      <div className="text-xs text-gray-400">{element.number}</div>
      <div className="text-lg md:text-xl font-bold text-white">{element.symbol}</div>
      <div className="text-xs truncate text-gray-300">{t.elements[element.symbol] || element.name}</div>
    </div>
  );
};

const ElementModal: React.FC<{ element: ElementData; onClose: () => void; }> = ({ element, onClose }) => {
    const { t } = useLanguage();

    const detailItem = (label: string, value: string | number | null | undefined | React.ReactNode) =>
        value || value === 0 ? (
            <div className="flex justify-between py-2 border-b border-gray-700/50">
                <span className="text-gray-400">{label}</span>
                <span className="text-white text-right break-words">{value}</span>
            </div>
        ) : null;
        
    const translatedName = t.elements[element.symbol] || element.name;
    const translatedCategory = t.periodicTableCategories[element.category] || <span className="capitalize">{element.category}</span>;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <header className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
                    <h2 className="text-2xl font-bold text-white">{translatedName} ({element.symbol})</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X size={24} />
                    </button>
                </header>
                <div className="p-4 md:p-6 space-y-4">
                    <p className="text-gray-300">{element.summary}</p>
                    {element.spectral_img && (
                        <div className="my-4 p-2 bg-black rounded-lg">
                           <img src={element.spectral_img} alt={`${translatedName} spectral image`} className="max-w-full h-auto mx-auto rounded" />
                        </div>
                    )}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        {detailItem(t.periodicTable.atomicNumber, element.number)}
                        {detailItem(t.periodicTable.atomicMass, element.atomic_mass)}
                        {detailItem(t.periodicTable.category, translatedCategory)}
                        {detailItem(t.periodicTable.phase, element.phase)}
                        {detailItem(t.periodicTable.density, element.density ? `${element.density} g/cm³` : null)}
                        {detailItem(t.periodicTable.boilingPoint, element.boil ? `${element.boil} K` : null)}
                        {detailItem(t.periodicTable.meltingPoint, element.melt ? `${element.melt} K` : null)}
                        {detailItem(t.periodicTable.molarHeat, element.molar_heat ? `${element.molar_heat} J/(mol·K)` : null)}
                        {detailItem(t.periodicTable.electronConfig, element.electron_configuration_semantic)}
                        {detailItem(t.periodicTable.electronegativity, element.electronegativity_pauling)}
                        {detailItem(t.periodicTable.discoveredBy, element.discovered_by)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Legend: React.FC = () => {
    const { t } = useLanguage();
    const legendItems = [
        { key: 'alkali metal', color: 'bg-red-500/30 border-red-400' },
        { key: 'alkaline earth metal', color: 'bg-orange-500/30 border-orange-400' },
        { key: 'transition metal', color: 'bg-indigo-500/30 border-indigo-400' },
        { key: 'post-transition metal', color: 'bg-blue-500/30 border-blue-400' },
        { key: 'lanthanide', color: 'bg-pink-500/30 border-pink-400' },
        { key: 'actinide', color: 'bg-rose-500/30 border-rose-400' },
        { key: 'metalloid', color: 'bg-yellow-500/30 border-yellow-400' },
        { key: 'polyatomic nonmetal', color: 'bg-green-600/30 border-green-500' },
        { key: 'diatomic nonmetal', color: 'bg-green-500/30 border-green-400' },
        { key: 'noble gas', color: 'bg-purple-500/30 border-purple-400' },
        { key: 'unknown', color: 'bg-gray-700/30 border-gray-600' }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 px-2">
            {legendItems.map(item => (
                <div key={item.key} className="flex items-center gap-2 text-xs">
                    <div className={`w-3.5 h-3.5 rounded-sm border ${item.color}`}></div>
                    <span className="text-gray-300">{t.periodicTableCategories[item.key]}</span>
                </div>
            ))}
        </div>
    );
};

const PeriodicTablePage: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
    const { t } = useLanguage();
    
    const allElements = PERIODIC_TABLE_DATA;

    const PlaceholderTile: React.FC<{text: string, style: React.CSSProperties, className?: string}> = ({text, style, className}) => (
        <div style={style} className={`flex items-center justify-center p-2 rounded-md text-xs text-center ${className}`}>
            {text}
        </div>
    );

    return (
        <div className="p-4 md:p-6 h-full flex flex-col">
            <header className="mb-4 border-b border-gray-700 pb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">{t.periodicTable.title}</h2>
                <p className="text-sm md:text-base text-gray-400">{t.periodicTable.description}</p>
            </header>
            
            <Legend />

            <div className="flex-1 overflow-auto p-2">
                <div className="grid gap-1" style={{ 
                    gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', 
                    gridTemplateRows: 'repeat(10, minmax(0, auto))',
                    minWidth: '1000px'
                }}>
                    {allElements.map((element) => (
                        <ElementTile key={element.number} element={element} onSelect={setSelectedElement} />
                    ))}
                    <PlaceholderTile text="* 57-71" style={{ gridColumn: 3, gridRow: 6 }} className="bg-pink-500/30 text-pink-300" />
                    <PlaceholderTile text="** 89-103" style={{ gridColumn: 3, gridRow: 7 }} className="bg-rose-500/30 text-rose-300" />
                    <PlaceholderTile text="*" style={{ gridColumn: 2, gridRow: 9 }} className="text-pink-300" />
                    <PlaceholderTile text="**" style={{ gridColumn: 2, gridRow: 10 }} className="text-rose-300" />
                </div>
            </div>

            {selectedElement && <ElementModal element={selectedElement} onClose={() => setSelectedElement(null)} />}
        </div>
    );
};

export default PeriodicTablePage;