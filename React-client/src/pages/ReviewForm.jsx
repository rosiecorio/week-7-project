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
                const result = await fetch(`https://side-quest-server.onrender.com/games`, {
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
        <form onSubmit={handleSubmit} id="reviewForm" className="reviewForm">
            <input className="nameInput" placeholder="Name.." onChange={handleChange} name="name" type="text" required/>
            <input className="titleInput" placeholder="Game title.." onChange={handleChange} name="title" type="text" required/>
            <textarea className="reviewInput" id="review" name="review" rows="6" cols="25" placeholder="Your review.." onChange={handleChange}></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}
