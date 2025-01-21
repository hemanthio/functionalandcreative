import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { File } from 'lucide-react';

const componentContext = import.meta.glob('./*.jsx', { eager: false });

const componentsList = Object.keys(componentContext)
  .filter(path => !path.includes('Functional.jsx'))
  .map(path => {
    const fileName = path.split('/').pop().replace(/\.[^/.]+$/, "");
    return {
      id: fileName.toLowerCase(),
      name: fileName.replace(/([A-Z])/g, ' $1').trim(),
      component: fileName
    };
  });

const components = Object.keys(componentContext)
  .filter(path => !path.includes('Functional.jsx'))
  .reduce((acc, path) => {
    const componentName = path.split('/').pop().replace(/\.[^/.]+$/, "");
    acc[componentName] = React.lazy(() => componentContext[path]());
    return acc;
  }, {});

const Functional = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-gray-50 border-r border-gray-200">
        <div className="p-4">
          <div className="inline-flex rounded-lg bg-gray-200 p-1">
            <Link
              to="/components/functional"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/components/functional'
                  ? 'bg-white text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Functional
            </Link>
            <Link
              to="/components/framermotion"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/components/framermotion'
                  ? 'bg-white text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              FramerMotion
            </Link>
          </div>
        </div>

        <div className="mt-4">
          {componentsList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedComponent(item.component)}
              className={`w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                selectedComponent === item.component
                  ? 'bg-blue-50 text-blue-600 border-[1px]  border-blue-300 rounded-lg'
                  : ''
              }`}
            >
              <File size={16} className="mr-2" />
              {item.name}
              <span className="ml-auto">›</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8">
        {selectedComponent ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            {React.createElement(components[selectedComponent])}
          </React.Suspense>
        ) : (
          <div className="text-gray-500">Select a component to view</div>
        )}
      </div>
    </div>
  );
};

export default Functional;