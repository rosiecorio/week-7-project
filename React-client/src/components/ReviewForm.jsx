export default function ReviewForm() {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" />

            <label htmlFor="title">Game Title:</label>
            <input name="title" type="text" />

            <label htmlFor="genre">Genre:</label>
            <input name="genre" type="select" />

            <label htmlFor="review">Review:</label>
            <input name="review"type="text" />

            <button type="submit">Submit</button>
        </form>
    )
}
