import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


import './app.css';
const App = () => {

    const data = [
        // 5, 
        {label: 'Going to learn', important: false, id: 'cdc'},
        {label: 'That is so good', important: false, id: 'aad'},
        {label: 'I need abreak...', important: false, id: 'qwewew'},
    ];

    return (
        <div className="app"> 
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}
             />
            <PostAddForm />
        </div>
        
        
        )
}

export default App;