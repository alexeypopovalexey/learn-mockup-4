import React from 'react';
import {
  Header,
  Intro,
  Presentation,
  Content,
  Price,
  Footer,
} from './sections';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Presentation />
        <Content />
        <Price />
      </main>
      <Footer />
    </div>
  );
}

export default App;
