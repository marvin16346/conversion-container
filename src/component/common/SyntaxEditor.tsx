import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import { useEffect, useState } from 'react';
import { Stack, Box, Grid, TextareaAutosize } from '@mui/material';
import React from 'react';

type Props = {
    text?: String,
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
        setCode(text?.valueOf());
        return () => {
        }
    }, [text]);
    
    function onTabDown(evt) {
        if (evt.key == "Tab") {
            evt.preventDefault();
            setCode(code + "    ");
        }
    }
    
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div>
                    <TextareaAutosize 
                        className='textarea-code'
                        // onKeyUp={onCodeChange} 
                        onKeyDown={onTabDown} 
                        id={`${keyString}-code-input`} 
                        value={code}
                        onChange={(evt) => setCode(evt.target.value)}
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