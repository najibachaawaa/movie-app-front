
import React from 'react';

import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {CustomThemeProvider} from "./Contexts/CustomThemeProvider";



const App = () => {
   
            return (
                <CustomThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<SearchPage />} />
                        <Route path="/id" element={<DetailPage />} />
                    </Routes>
                </Router>
                </CustomThemeProvider>
            );
        }
        
  
 


export default App;
