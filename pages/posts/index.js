import PostGrid from "../../components/PostGrid";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import API_URL from '../../http-utils';


export default function AllPost({ posts }) {
    return (
        <BaseLayout>
            <section className="bg-white">
                <section className="container">
                    <div className="row">
                        <h1>Все статьи</h1>
                        <PostGrid posts={posts}  />
                    </div>
                </section>
            </section>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        return {
            props: {
                posts,
            },
        }
    } catch (e) {
        console.log(e)
    }
}
