import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import { useEffect, useState } from 'react';
import { Stack, Box, Grid, TextareaAutosize } from '@mui/material';
import React from 'react';

type Props = {
    text?: string,
    keyString: string
}

const SyntaxEditor = ({ text, keyString }: Props) => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
      Prism.highlightAll();
      return () => {
      }
    }, [code]);

    useEffect(() => {
        if (!!text) {
            document.getElementById(`${keyString}-code-input`).value = text;
            setCode(text);
        }
      return () => {
        setCode("");
      }
    }, [text]);
    
    
    function onCodeChange(evt) {
        setCode(evt.target.value);
    }

    function onTabDown(evt) {
        if (evt.key == "Tab") {
            evt.preventDefault();
            let codeInput = document.getElementById(`${keyString}-code-input`);
            codeInput.value = codeInput.value.concat("    ");
        }
    }
    
    return ( 
        <Grid container spacing={2}
            // key = {key}
        >
            <Grid item xs={6}>
                <div>
                    <TextareaAutosize 
                        className='textarea-code'
                        onKeyUp={onCodeChange} 
                        onKeyDown={onTabDown} 
                        id={`${keyString}-code-input`} 
                    />
                </div>
            </Grid>
            <Grid item xs={6}> 
                <div className='Code'>
                    <pre>
                        <code className='language-javascript'>
                            {code}
                        </code>
                    </pre>
                </div>
            </Grid>
        </Grid>
     );
}

export default SyntaxEditor;