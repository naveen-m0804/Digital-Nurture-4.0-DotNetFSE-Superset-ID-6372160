import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  // State to select which component to display
  const [selectedComponent, setSelectedComponent] = useState('book');

  // State to select conditional rendering method
  const [renderMethod, setRenderMethod] = useState('ifelse');

  // Render selected component using if-else
  const renderWithIfElse = () => {
    if (selectedComponent === 'book') {
      return <BookDetails />;
    } else if (selectedComponent === 'blog') {
      return <BlogDetails />;
    } else if (selectedComponent === 'course') {
      return <CourseDetails />;
    } else {
      return <p>No component selected</p>;
    }
  };

  // Render selected component using switch-case
  const renderWithSwitch = () => {
    switch (selectedComponent) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>No component selected</p>;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App - Conditional Rendering Examples</h1>

      {/* Selection of which component to render */}
      <div>
        <label>
          Select Component:{' '}
          <select
            value={selectedComponent}
            onChange={e => setSelectedComponent(e.target.value)}
          >
            <option value="book">Book Details</option>
            <option value="blog">Blog Details</option>
            <option value="course">Course Details</option>
          </select>
        </label>
      </div>

      {/* Selection of rendering method */}
      <div style={{ marginTop: '10px' }}>
        <label>
          Select Rendering Method:{' '}
          <select
            value={renderMethod}
            onChange={e => setRenderMethod(e.target.value)}
          >
            <option value="ifelse">If-Else</option>
            <option value="ternary">Ternary Operator</option>
            <option value="logicalAnd">Logical && Operator</option>
            <option value="switch">Switch-Case</option>
          </select>
        </label>
      </div>

      <hr style={{ margin: '20px 0' }} />

      {/* Render based on selected method */}
      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px' }}>
        {renderMethod === 'ifelse' && renderWithIfElse()}

        {renderMethod === 'switch' && renderWithSwitch()}

        {renderMethod === 'ternary' &&
          (selectedComponent === 'book' ? (
            <BookDetails />
          ) : selectedComponent === 'blog' ? (
            <BlogDetails />
          ) : selectedComponent === 'course' ? (
            <CourseDetails />
          ) : (
            <p>No component selected</p>
          ))}

        {renderMethod === 'logicalAnd' && (
          <>
            {selectedComponent === 'book' && <BookDetails />}
            {selectedComponent === 'blog' && <BlogDetails />}
            {selectedComponent === 'course' && <CourseDetails />}
            {!['book', 'blog', 'course'].includes(selectedComponent) && <p>No component selected</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
