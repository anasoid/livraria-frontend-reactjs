import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class AutorForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: ''
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor={'autorNome'}>Nome: </label>
          <input id={'autorNome'} value={this.state.nome}
            onChange={(event) => this.inputChange(event)}
            name={'nome'}/>
          <br/>
          <label htmlFor={'autorEmail'}>Email: </label>
          <input id={'autorEmail'} value={this.state.email}
            onChange={(event) => this.inputChange(event)}
            name={'email'}/>
          <br/>
          <button id={'btnGravarAutor'} type={'submit'} disabled={!this.validateForm()}>Gravar Autor</button>
        </form>
      </div>
    );
  }

  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validateForm() {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.state.nome.length > 0 &&
      emailPattern.test(String(this.state.email).toLowerCase());
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(AutorForm);