import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes';

function App() {
  const note = notes.map((obj) => {
    return <Note title={obj.title} content={obj.content} />;
  });
  return (
    <div>
      <Header />
      {note}
      <Footer />
    </div>
  );
}

export default App;
