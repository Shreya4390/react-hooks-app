import * as React from 'react';

export default function BlogList(props) {
    console.log(props)
    return (
        <div className="MyTable">
            <table>
                <tbody>
                    <tr>
                        {props.headers.map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                    {props.blogs?.map((item, key) => {
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
                                        onClick={() => props.handleDelete(item.id)}
                                        className="btn btn-sm btn-danger btn-ct"
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