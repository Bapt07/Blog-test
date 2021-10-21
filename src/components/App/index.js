// == Import npm
import React, { useState, useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
// bibliothèque pour faciliter les appels AJAX
// import axios from 'axios';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Posts from 'src/components/Posts';
import Loader from 'src/components/Loader';
// import SinglePost from 'src/components/SinglePost';
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';

import { getPostsByCategory } from 'src/Utils';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header categories={categoriesData} />
    <Posts posts={postsData} />
    <Footer />
  </div>
);

// == Export
export default App;
