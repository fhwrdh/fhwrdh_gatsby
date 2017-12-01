import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
  display: inline-block;
  padding: 0 6px;
  border-radius: 3px;
  margin-right: 5px;
  border: 1px solid #ddd;
  font-size: 0.8em;
  background-color: #fcfcfc;
  font-variant: all-small-caps;
`;

const TagList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;


const parseTags = tagString => {
  console.log('tagString: ', tagString);
  if (!tagString) return null;

  console.log('tagString.: ', tagString.toLowerCase().split(','));
  return tagString.toLowerCase().split(',').sort().map(t => <Tag key={t}>{t}</Tag>);

}



export const Tags = ({ tags }) => (
  <TagList>{parseTags(tags)}</TagList>
);
