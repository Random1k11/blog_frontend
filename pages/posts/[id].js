import ReactMarkdown from 'react-markdown';
import { getAllPostIds, getPostData } from '../../lib/posts'
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

export default function BlogPost({ postData }) {
    return (
        <BaseLayout>
            <section className="blog-post-container">
                <div className="row">
                    <h1 id="blog-post-title">{postData.title}</h1>
                    <div id="blog-post-body">
                        <ReactMarkdown source={postData.text} />
                        {postData.text}
                    </div>
                </div>
            </section>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
