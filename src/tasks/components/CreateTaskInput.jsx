import React, {useState} from "react";

const CreateTaskInput = ({ onCreate }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }

    const handleTaskCreate = () => {
        if ( inputValue && !(inputValue.startsWith(' ')) ) {
            onCreate(inputValue)
            setInputValue('')
        }
    }

    return (
        <>
            <div className="create-task">
                <input
                    className="create-task__input"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button className="btn create-task__btn" onClick={handleTaskCreate}>Create</button>
            </div>
        </>
    )
}

export default CreateTaskInput