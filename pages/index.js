import Head from 'next/head'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import PostMasonry from "../components/PostMasonry";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import PostGrid from "../components/PostGrid";
import API_URL from "../http-utils";

const trendingConfig = {

    // 1 is the second element in the array of posts
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
        post.author = 'Jason Oh'
        post.description = '....'
    });
}


export default function Home({ posts }) {
  return (
      <BaseLayout>
          <div className="App">
              <main className="home">
                  <section className="container">
                      <div className="row">
                          <h1>Последние статьи</h1>
                          <section className="featured-posts-container">
                              {mergeStyles(posts, trendingConfig)}
                              <PostMasonry posts={posts} columns={2} tagsOnTop={true} />
                          </section>
                      </div>
                  </section>
                  <section className="bg-white">
                      <section className="container">
                          <div className="row">
                              <h1>Все статьи</h1>
                              <PostGrid posts={posts}  />
                          </div>
                      </section>
                  </section>
              </main>
          </div>
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
