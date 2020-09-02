import React from 'react';
import { connect } from 'react-redux';
import { deleteItemAction } from '../actions';

const Item = ({ title, deleteItem }) => (
  <li onClick={deleteItem}>{ title }</li>
);

const mapDispatchToProps = (dispatch, { itemId }) => ({
  deleteItem: () => dispatch(deleteItemAction(itemId))
});

export default connect(
  null,
  mapDispatchToProps,
)(Item);
