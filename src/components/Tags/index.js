import React from 'react';
import styled from 'styled-components';

const Tag = styled.span`
  font-family: 'Titillium Web', sans-serif;
  display: inline-block;
  padding: 0 6px;
  margin-right: 5px;
  border-radius: 2px;
  border: 1px solid #e0e0e0;
  font-size: 0.9em;
  font-variant: all-small-caps;
  background-color: #f9f9f9;
  user-select: none;
  &:hover {
    border: 1px solid #ddd;
    background-color: #f0f0f0;
  }
`;

const TagList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const parseTags = tagString => {
  if (!tagString) return null;
  return tagString.toLowerCase().split(',').sort().map(t => <Tag key={t}>{t}</Tag>);
}

export const Tags = ({ tags }) => (
  <TagList>{parseTags(tags)}</TagList>
);
