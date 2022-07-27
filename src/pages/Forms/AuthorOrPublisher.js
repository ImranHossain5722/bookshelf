import React, { useState } from 'react';
import AddAuthor from './AddAuthor';
import AddPublisher from './AddPublisher';

const AuthorOrPublisher = () => {
    const [isChecked, setIsChecked] = useState(false);
    const checkState = e => {

        const checked = e.target.checked;
        setIsChecked(checked);
        console.log(isChecked);
    }

    return (
        <div>
            <div class="form-control w-1/6 mx-auto my-12 rounded-3xl " >
                <label class="label cursor-pointer border p-0 rounded-3xl">
                    <span class="label-text text-2xl font-bold p-3 bg-[#B4ACAC] text-white pl-8 rounded-l-3xl ">Author</span>
                    <input onChange={(e) => checkState(e)} type="checkbox" class="toggle rounded-none toggle-primary border-4 py-6 px-7" />
                    <span class="label-text text-2xl font-bold p-3 bg-primary text-white rounded-r-3xl ">Publisher</span>
                </label>
            </div>
            <div>
                {!isChecked ? <AddAuthor /> : <AddPublisher />}
            </div>
        </div>
    );
};

export default AuthorOrPublisher;