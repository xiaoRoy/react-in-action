import React, { Component } from 'react';

class ShoppingList extends React.Component{
    render() {
        return <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
            <li>Huawei Mate 20</li>
            <li>Switch</li>
            <li>Watch</li>
        </ul>
        </div>
    }
}