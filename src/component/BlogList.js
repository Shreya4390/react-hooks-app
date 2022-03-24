import * as React from 'react';

const BlogList = ({ headers, handleChange, blogs }) => {
    return (
        <div className="MyTable">
            <table>
                <tbody>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                    {blogs?.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>{item.author}</td>
                                <td>
                                    <button
                                        type="button"
                                        id={item.id}
                                        onClick={() => handleChange(item.id)}
                                        className="comp_btn"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
}

export default BlogList;