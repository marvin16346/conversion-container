import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';
import { useEffect, useState } from 'react';
import { Stack, Box, Grid, TextareaAutosize } from '@mui/material';

type Props = {
    text?: string | undefined
}

const SyntaxEditor = ({ text }: Props) => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
      Prism.highlightAll();
      return () => {
      }
    }, [code]);

    useEffect(() => {
        if (!!text) {
            document.getElementById("code-input").value = text;
            setCode(text);
        }
      return () => {
      }
    }, [text]);
    
    
    function onCodeChange(evt) {
        setCode(evt.target.value);
    }

    function onTabDown(evt) {
        if (evt.key == "Tab") {
            evt.preventDefault();
            let codeInput = document.getElementById("code-input");
            codeInput.value = codeInput.value.concat("    ");
        }
    }
    
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div>
                    <TextareaAutosize 
                        className='textarea-code'
                        onKeyUp={onCodeChange} 
                        onKeyDown={onTabDown} 
                        id="code-input" 
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