import React, {memo} from 'react';
import {Table} from "shared/ui/table";

export const CreateGroupItem = memo(({title, data}) => {
    console.log(data, "dsd")
    console.log(title, "item")


    return (
        <div>

            <Table>
                {title.name}
                <thead>
                <tr>
                    <th/>
                    <th>Ism Familiya</th>
                    <th>Yosh</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{data.name}{data.surname}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
})