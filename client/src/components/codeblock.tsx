import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {darkTheme} from "../theme/theme";
const CodeBlock : any = {
    code({ node, inline, className, children, ...props } : any) : any {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
                <SyntaxHighlighter
                    style={darkTheme.codeBlock}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
        {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
            <code className={className} {...props}>
        {children}
        </code>
    )
    }
}

export default CodeBlock