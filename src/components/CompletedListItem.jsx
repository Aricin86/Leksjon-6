import React from 'react';

const CompletedListItem = ({ title, author, description }) => (
  <tr className="tbl-row">
    <td>{title}</td>
    <td>{author}</td>
    <td>{description}</td>
    <td>xx.xx.xx</td>
  </tr>
);

export default CompletedListItem;
