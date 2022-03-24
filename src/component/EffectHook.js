import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import { headers } from '../utils/Constant'
import "../App.css";

const EffectHook = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new webstite", body: "Lorem ipsum.....", author: "Shreya", id: 1 },
        { title: "My second webstite", body: "Lorem ipsum.....", author: "Shweta", id: 2 },
        { title: "My third webstite", body: "Lorem ipsum.....", author: "Janhvi", id: 3 }
    ])
    const [contant, setContant] = useState('')
    const handleChange = (id) => {
        const newTodos = blogs.filter((item) => item.id !== id);
        setBlogs(newTodos);
        setContant(`Item ${id} deleted!`)
    };


    useEffect(() => {
        if (blogs.length === 0) {
            setContant('All item deleted');
        }
        console.log("Providing you update data after render", blogs)
    }, [blogs],
    )

    return (
        <div>
            <h4 style={{ color: "red" }}>{contant}</h4>
            <BlogList headers={headers} blogs={blogs} title="All Blogs" handleChange={handleChange}></BlogList>
        </div >
    )
}
export default EffectHook;