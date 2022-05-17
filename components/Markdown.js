import ReactMarkdown from 'react-markdown';

import rehypeRaw from "rehype-raw";
import remarkMath from 'remark-math';
import rehypeKatex from "rehype-katex";

import "katex/dist/katex.min.css";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Markdown({ childs }) {
    return (
        <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkMath]}
        // eslint-disable-next-line react/no-children-prop
        children={childs}
        components={{
            code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                    <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={atomDark}
                    showLineNumbers={true}
                    PreTag="div"
                    onClick={(e) => {
                        navigator.clipboard.writeText(String(children));
                        toast.info('Copied text to clipboard', {
                            position: "top-center",
                            autoClose: 2500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        }}
                    {...props}
                    />
            ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
            )
            }
        }}
        />
    )
}