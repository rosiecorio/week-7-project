import { useState} from "react"

export default function ReviewForm() {

    const [formData, setFormData] = useState({})

    function handleChange(event) {
        console.log({[event.target.name] : event.target.value})
        setFormData(
            {...formData, [event.target.name] : event.target.value}
        )
    }

        async function handleSubmit(event) {
            event.preventDefault()
            try {
                const result = await fetch(`http://localhost:8080/games`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                })
                const message = await result.json()
                console.log(message)
            } catch (error) {
                console.log(error.message)
                // throw new Error('Something went wrong!')
            }
        }


    //when user submits form, send values to database table?
    
    return (
        <form onSubmit={handleSubmit} id="reviewForm">
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} name="name" type="text" required/>

            <label htmlFor="title">Game Title:</label>
            <input onChange={handleChange} name="title" type="text" required/>

            <label htmlFor="review">Review:</label>
            <input onChange={handleChange} name="review"type="text" required/>

            <button type="submit">Submit</button>
        </form>
    )
}
