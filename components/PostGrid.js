import React, {useState, useMemo, useEffect} from 'react'
import {Pagination} from 'antd'
import Link from "next/link";


let isBottom = () => {
    const wrappedElement = document.getElementsByClassName('post-grid');
    // return wrappedElement.getBoundingClientRect.bottom <= window.innerHeight;
}

export default function PostGrid ({posts}) {
    const [pageSize, setPageSize] = useState(8)
    const [current, useCurrent] = useState(1)

    const paginatedPosts = useMemo(
        () => {
            const lastIndex = current * pageSize
            const firstIndex = lastIndex - pageSize
            return posts.slice(firstIndex, lastIndex)
        }, [current, pageSize]
    )

    useEffect(() => {

        window.scroll({
            top: 700,
            left: 0,
            behavior: 'smooth'
        })    
    }, [current, pageSize])
    return (
        <section className="grid-pagination-container">

            <section className="post-grid container">
                {paginatedPosts.map((post, index) => (
                    <Link href={"posts/" + post.id} key={index}>
                    <div className="post-container" key={index}>
                        <figure>
                            <img src={post.image} alt={post.image} />
                        </figure>
                        {/*<TagRow tags={post.categories} />*/}
                        <h2>{post.title}</h2>
                    </div>
                    </Link>
                ))}
                </section>
                <Pagination
                    simple
                    showSizeChanger
                    onShowSizeChange={setPageSize}
                    pageSize={pageSize}
                    total={posts.length}
                    defaultCurrent={current}
                    onChange={useCurrent}
                />
            </section>
        )
}
