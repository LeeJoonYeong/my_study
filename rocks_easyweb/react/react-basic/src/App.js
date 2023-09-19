import React, { Component } from 'react';
import './App.css'
import Myheader from './Myheader';
import Mynav from './Mynav';
import Myarticle from './Myarticle';
import Createarticle from './Createarticle';
import Updatearticle from './Updatearticle';
import Controls from './Controls';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.current_id = 3;
    this.state = {
      mode: 'welcome',
      selected_id: 2,
      subject: {title: 'React', desc: 'Single Page Application'},
      welcome: {title: 'welcome', desc: 'welcome to react'},
      menus: [
        {id: 1, title: 'HTML', desc: "Hypertext Markup Language"},
        {id: 2, title: 'CSS', desc: "CSS is for design"},
        {id: 3, title: 'Javascript', desc: "Javascript is for interactive"},
      ]
    }
  }

  getArticles() {
    const { mode, selected_id, welcome, menus } = this.state; // 구조분해
    
    let _title, _desc, _article = null;

    if (mode === 'welcome') {

      _title = welcome.title;
      _desc = welcome.desc;
      _article = <Myarticle title={_title} desc={_desc} />;

    } else if (mode === 'read') {

      _title = menus[selected_id - 1].title;
      _desc = menus[selected_id - 1].desc;
      _article = <Myarticle title={_title} desc={_desc} />;

    } else if (mode === 'create') {

      _article = <Createarticle onSubmit={function(_title, _desc) {
        this.current_id += 1;
        this.setState({ 
          mode: 'read',
          selected_id: this.current_id,
          menus: [...menus, {id: this.current_id, title: _title, desc: _desc}] 
        });
      }.bind(this)} />;

    } else if (mode === 'update') {

      _article = <Updatearticle 
        data={menus[selected_id - 1]} 
        onSubmit={function(_title, _desc) {

        let new_menus = [...menus];
        new_menus[selected_id - 1] = {id: selected_id, title: _title, desc: _desc };

        this.setState({ 
          mode: 'read',
          menus: new_menus 
        });

      }.bind(this)} />;
    } 

    return _article;
  }

  render() {

    console.log('App.js 실행됨');

    const { subject, menus, selected_id } = this.state; // 구조분해

    return (
      <div className="App">
        <Myheader 
          title={subject.title}
          desc={subject.desc}
          onChangePage={function() {
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}
        />  
        <Mynav 
          data={menus}
          onChangePage={function(id) {
            this.setState({
              mode:'read',
              selected_id: id
            });
          }.bind(this)}
        />

        {this.getArticles()}

        <Controls 
          onChangePage={function(mode) {
            
            this.setState({
              mode,
            });

            if (mode === 'delete') {
              if(window.confirm('정말 삭제 할까요?')) {

                let new_menus = [...menus];
                new_menus.splice(selected_id - 1, 1);
                this.setState({ 
                  mode: 'welcome',
                  menus: new_menus 
                });
                
              }
            }

          }.bind(this)}
        />
      </div>
    );
  }
}