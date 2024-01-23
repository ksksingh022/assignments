export default function CardForm({onInputChange}){
    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" onChange={onInputChange} />
            </label>
            <label>
                Description:
                <input type="text" name="desc" onChange={onInputChange} />
            </label>
            <label>
                LinedIn url:
                <input type="text" name="linkedin" onChange={onInputChange} />
            </label>
            <label>
                Twitter(X) url:
                <input type="text" name="twitter" onChange={onInputChange} />
            </label>
            <label>
                Interests:
                <input type="text" name="interests" onChange={onInputChange} />
            </label>
        </form>
    )
}