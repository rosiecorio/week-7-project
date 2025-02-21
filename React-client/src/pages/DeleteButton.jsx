export default function DeleteButton({id}) {
    
    async function handleDelete() {
        try {
            const response = await fetch(`http://localhost:8080/games/${id}`, {
                method: "DELETE"
            })
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <button onClick={handleDelete} className="deleteReviewButton">X</button>
    )
}