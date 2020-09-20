import React from 'react'
import Link from "next/link";

export default function MasonryPost ({post, tagsOnTop}) {

    const windowWidth = 1000
    const imageBackground = {backgroundImage: `url("${`${post.image}`}")`}
    const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground;

    return (
        <a className="masonry-post overlay" style={style} href="">
            <Link href={"posts/" + post.id}>
                <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
                    {/*<TagRow tags={post.categories} />*/}
                    <div>
                        <h2 className="image-title">{post.title}</h2>
                        <span className="image-date">{new Date(post.created_at).toDateString()}</span>
                    </div>
                </div>
            </Link>
        </a>
    )
}
