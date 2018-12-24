import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import MenuContainer from '../livraria-header/menu-container';


describe('test MenuContainer component', () => {

  const wrapper = shallow(<MenuContainer/>);

  it('should renders without crashing ', () => {
    shallow(<MenuContainer/>);
    const tree = renderer.create(<MenuContainer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be menu item Livro', () => {
    const livro = wrapper.find('#livroItem');
    expect(livro).toMatchSelector('a');
    expect(livro).toHaveText('Livros');
    expect(livro).toHaveProp('href', '/livros');
  });

  it('should be menu item Autores', () => {
    const autor = wrapper.find('#autorItem');
    expect(autor).toMatchSelector('a');
    expect(autor).toHaveText('Autores');
    expect(autor).toHaveProp('href', '/autores');
  });

  it('should be menu item Vendas', () => {
    const venda = wrapper.find('#vendaItem');
    expect(venda).toMatchSelector('a');
    expect(venda).toHaveText('Vendas');
    expect(venda).toHaveProp('href', '/vendas');
  });

  it('should be menu item Logout', () => {
    const logout = wrapper.find('#logoutItem');
    expect(logout).toMatchSelector('a');
    expect(logout).toHaveText('Logout');
    expect(logout).toHaveProp('href', '/login');
  });

});