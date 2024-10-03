import React from 'react';
import SearchBar from '../../../components/SearchBar/SearchBar';
import TabComponent from '../../../components/TabsComponent/TabComponent';
import Hotels from '../../../components/Hotels/Hotels';

const Home = () => {
    return (
        <div>
            <SearchBar></SearchBar>
            <TabComponent></TabComponent>
            <Hotels></Hotels>
        </div>
    );
};

export default Home;