import React, { useState } from 'react';
import BlogList from './BlogList';
import { headers } from '../utils/constant'
import "../App.css";

export default function EffectHook() {
    const [blogs, setBlogs] = useState([
        { title: "My new webstite", body: "Lorem ipsum.....", author: "Shreya", id: 1 },
        { title: "My second webstite", body: "Lorem ipsum.....", author: "Shweta", id: 2 },
        { title: "My third webstite", body: "Lorem ipsum.....", author: "Janhvi", id: 3 }
    ])
    // function handelDelete(id) {
    //     const newTodos = blogs.filter((item) => item.id !== id);
    //     setBlogs(newTodos);
    // };

    return (
        <div>
            <BlogList headers={headers} blogs={blogs} title="All Blogs" handelDelete={(id) => {
                const newTodos = blogs.filter((item) => item.id !== id);
                setBlogs(newTodos);
            }}></BlogList>
        </div>
    )
}