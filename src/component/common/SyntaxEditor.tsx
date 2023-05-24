import { useEffect, useState } from 'react';
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

type Props = {
    text?: String,
    keyString: string
}

const SyntaxEditor = ({ text, keyString }: Props) => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
        text && setCode(text.valueOf());
        return () => {
        }   
    }, [text]);
    

    return ( 
        <Editor
            id={`${keyString}-code-input`}
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
                border: "1px solid rgba(0, 0, 0, 0.23)",
            }}
        />
     );
}

export default SyntaxEditor;