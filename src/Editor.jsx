import React from 'react';
import styled from 'styled-components';

let TextEditor = styled.textarea`
  display: inline;
  width: 50vw;
  height: 90vh;
  text-align: left;
  font-weight: bold;
  padding: 10px;
  font-size: 1.3rem;
  resize: none;
  outline: none;
  border: 1px solid grey;
  border-radius: 3px;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
  &::selection {
    background-color: #ffe3af;
  }
`

const Editor = () => {

    const select = async (e) => {
    
        setTimeout(() => {
          let selectedText = window.getSelection().toString()
      
          if(!selectedText) {
            return;
          }
    
          // axios.get(`https://api.datamuse.com/words?rel_rhy=${selectedText}`).then(res => {
          //   console.log(res);
          // })
          console.log(selectedText)
        }, 500)
    
        
      }

    return (
        <div>
            <TextEditor/>
        </div>
    );
};

export default Editor;