import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Markdown({ childs }) {
    return (
        <ReactMarkdown
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