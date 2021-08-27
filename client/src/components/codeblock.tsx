import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {vscDarkPlus} from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock : any = {
    code({ node, inline, className, children, ...props } : any) : any {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
                <SyntaxHighlighter
                    style={vscDarkPlus}
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