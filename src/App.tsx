import I18N from '../i18n';
import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{I18N.src.App.niFengRuJieYi2}</div>
        <div>{I18N.src.App.zuoYiRuZuoRen}</div>
        <div>啦啦啦</div>
      </header>
    </div>
  );
}

export default App;
