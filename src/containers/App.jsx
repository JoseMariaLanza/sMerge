import React from 'react';
import Header from '../components/Header';
import Articles from '../components/Articles';
import Article from '../components/Article';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);

  console.log(initialState);

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      {initialState.mylist.length > 0 && (
        <Articles title='More sell'>
          {initialState.mylist.map((item) => <Article key={item.id} {...item} />)}
          {/* item.cover, item.title, item.year, item.contentRating, item.duration */}
        </Articles>
      )}
      <Articles title='More sell'>
        {initialState.trends.map((item) => <Article key={item.id} {...item} />)}
      </Articles>
      <Articles title='New!!'>
        {initialState.originals.map((item) => <Article key={item.id} {...item} />)}
      </Articles>
    </div>
  );
};

export default App;
